import { Injectable } from '@angular/core';
import { SQLiteDatabaseConfig, SQLiteObject, SQLite, SQLiteTransaction } from '@ionic-native/sqlite';
import { Observable, Observer } from 'rxjs';

import { Database } from "./database";
import { DatabaseResultSet } from "./database-result-set.model";
import { DatabaseNativeResultSet } from "./native/database-native-result-set";
import { DatabaseNativeError } from "./native/database-native-error";
import { SQLQuery } from "../sql/sql.query.model";
import { SQLQueryBuilder } from "../sql/sql.query-builder";

/**
 * SQLite database implementation.
 * Use database service instead of.
 * 
 * @hidden
 */
@Injectable()
export class DatabaseSQLite implements Database {

  public static readonly DATABASE_CONFIG: SQLiteDatabaseConfig = {
    name: 'linguistic15.db',
    location: 'default'
  }

  private db: SQLiteObject;

  constructor(private sqlite: SQLite) { }

  open(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      this.sqlite.create(DatabaseSQLite.DATABASE_CONFIG)
        .then((db: SQLiteObject) => {
          console.log('SQLite database was opened successful.');
          this.db = db;
          observer.next(null);
          observer.complete();
        })
        .catch(e => {
          console.log('SQLite database opening failure.')
          console.log(e)
          observer.error(e);
        });
    });
  }

  executeSQLs(...queries: SQLQuery[]): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      this.db.transaction((tx: SQLiteTransaction) => {

        for (let query of queries) {
          tx.executeSql(query.sql, query.values, res => {
            this.logSuccessfulExecution(query.sql);
            observer.next(res);
          }, e => {
            this.logFailureExecution(query.sql, e);
            observer.error(e);
          });
        }

      }).then(() => observer.complete())
        .catch(e => {
          console.log(e)
          observer.error(e)
        });
    });
  }

  executeSQL(query: SQLQuery): Observable<DatabaseResultSet> {
    return Observable.create((observer: Observer<any>) => {
      this.db.executeSql(query.sql, query.values)
        .then((res: DatabaseNativeResultSet) => {
          this.logSuccessfulExecution(query.sql);
          observer.next(new DatabaseResultSet(res));
          observer.complete();
        }).catch((err: DatabaseNativeError)  => {
          this.logFailureExecution(query.sql, err);
          observer.error(err);
        })
    });
  }

  select(query: SQLQuery): Observable<Array<any>> {
    let rows = null;
    return this.executeSQL(query)
      .flatMap((rs: any) => Observable.of(rs.rows))
      .flatMap((_rows: any) => {
        rows = _rows;
        if (rows.length > 0) {
          return Observable
            .range(0, rows.length)
            .flatMap((index: number) => Observable.of(rows.item(index)))
            .toArray();
        } else {
          return Observable.of([]);
        }
      });
  }

  selectOne(query: SQLQuery): Observable<any> {
    return this.executeSQL(query)
      .flatMap((rs: any) => Observable.of(rs.rows))
      .flatMap((rows: any) => {
        if (rows.length > 0) {
          return Observable.of(rows.item(0))
        } else {
          return Observable.of(null);
        }
      });
  }

  all(tableName: string): Observable<Array<any>> {
    return this.select(new SQLQueryBuilder(tableName).select(SQLQuery.ALL_OPERATOR).build());
  }

  count(tableName: string): Observable<number> {
    return this.executeSQL(new SQLQueryBuilder(tableName).count().build())
      .flatMap((rs: any) => Observable.of(rs.rows))
      .flatMap((rows: any) => rows && rows.length > 0
        ? Observable.of(rows.item(0)[SQLQuery.COUNT_STATEMENT])
        : Observable.of(0));
  }

  private logSuccessfulExecution(sql: string) {
    console.log(`SQL was executed: "${sql}"`);
  }

  private logFailureExecution(sql: string, e: any) {
    console.log(`SQL was NOT executed: "${sql}"`);
    console.log(e)
  }

}
