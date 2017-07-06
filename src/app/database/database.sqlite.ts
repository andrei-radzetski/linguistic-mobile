import { Injectable } from '@angular/core';
import { SQLiteDatabaseConfig, SQLiteObject, SQLite, SQLiteTransaction } from '@ionic-native/sqlite';
import { Observable, Observer } from 'rxjs';

import { Database } from "./database";
import { DatabaseResultSet } from "./database-result-set.model";
import { DatabaseNativeResultSet, DatabaseNativeError, DatabaseNativeTransactionResultSet } from "./database-native.model";
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
    name: 'linguistic18.db',
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

  count(tableName: string): Observable<number> {
    return this.executeSQL(new SQLQueryBuilder(tableName).count().build())
      .flatMap((rs: any) => Observable.of(rs.rows))
      .flatMap((rows: any) => rows && rows.length > 0
        ? Observable.of(rows.item(0)[SQLQuery.COUNT_STATEMENT])
        : Observable.of(0));
  }

  executeSQLs(...queries: SQLQuery[]): Observable<DatabaseNativeTransactionResultSet> {
    return Observable.create((observer: Observer<DatabaseNativeTransactionResultSet>) => {
      this.db.transaction((tx: SQLiteTransaction) => {

        for (let query of queries) {
          tx.executeSql(query.sql, query.values, (res: DatabaseNativeTransactionResultSet) => {
            this.success(query.sql);
            observer.next(res);
          }, (err: DatabaseNativeError) => {
            this.fail(query.sql, err);
            observer.error(err);
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
          this.success(query.sql);
          observer.next(new DatabaseResultSet(res));
          observer.complete();
        }).catch((err: DatabaseNativeError) => {
          this.fail(query.sql, err);
          observer.error(err);
        })
    });
  }

  private success(sql: string) {
    console.log(`SQL was executed: "${sql}"`);
  }

  private fail(sql: string, e: any) {
    console.log(`SQL was NOT executed: "${sql}"`);
    console.log(e)
  }

}
