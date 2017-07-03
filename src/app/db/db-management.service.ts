import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject, SQLiteDatabaseConfig, SQLiteTransaction } from '@ionic-native/sqlite';
import { Observable, Observer } from 'rxjs';

import { SQLQuery } from "./sql-query.model";

/**
 * Database service.
 */
@Injectable()
export class DBManagementService {

  public static readonly SQL_CONFIG: SQLiteDatabaseConfig = {
    name: 'linguistic202.db',
    location: 'default'
  }

  private _db: SQLiteObject;

  constructor(private sqlite: SQLite) { }

  /**
   * Create or open db connection.
   * 
   * @return {Observable<SQLiteObject>} Returns observable.
   */
  open(): Observable<SQLiteObject> {
    return Observable.create((observer: Observer<SQLiteObject>) => {
      this.sqlite.create(DBManagementService.SQL_CONFIG)
        .then((db: SQLiteObject) => this.onOpenSuccess(observer, db))
        .catch(e => this.onOpenFailure(observer, e));
    });
  }

  /**
   * Get database instance.
   * 
   * @return {SQLiteObject} Returns database.
   */
  get db(): SQLiteObject {
    return this._db;
  }

  /**
   * Execute SQL queries in transaction.
   * 
   * @param {SQLQuery[]} queries SQL queries.
   */
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
    })
  }
  /**
   * Execute single SQL query.
   * 
   * @param {SQLQuery} query SQL query.
   */
  executeSQL(query: SQLQuery): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      this.db.executeSql(query.sql, query.values)
        .then(rs => {
          this.logSuccessfulExecution(query.sql);
          observer.next(rs);
          observer.complete();
        }).catch(e => {
          this.logFailureExecution(query.sql, e);
          observer.error(e);
        })
    });
  }

  /**
   * Execute SQL query and get rows.
   * 
   * @param {SQLQuery} query SQL query.
   */
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

  /**
   * Get all orders of the specified table.
   *
   * @param {string} tableName Table name.
   */
  all(tableName: string): Observable<Array<any>> {
    return this.select(SQLQuery.selectAll(tableName));
  }

  /**
   * Get count of the specified table.
   * 
   * @param {string} tableName Table name.
   */
  count(tableName: string): Observable<number> {
    return this.executeSQL(SQLQuery.count(tableName))
      .flatMap((rs: any) => Observable.of(rs.rows))
      .flatMap((rows: any) => rows && rows.length > 0
        ? Observable.of(rows.item(0)[SQLQuery.COUNT_STATEMENT])
        : Observable.of(0));
  }

  /**
   * Successful on open database callback.
   */
  private onOpenSuccess(observer: Observer<SQLiteObject>, db: SQLiteObject) {
    console.log('Database was opened successful.');
    this._db = db;
    observer.next(db);
    observer.complete();
  }

  /**
   * Failure on open database callback.
   */
  private onOpenFailure(observer: Observer<SQLiteObject>, e: any) {
    console.log('Database opening failure.')
    console.log(e)
    observer.error(e);
  }

  private logSuccessfulExecution(sql: string) {
    console.log(`SQL was executed: "${sql}"`);
  }

  private logFailureExecution(sql: string, e: any) {
    console.log(`SQL was NOT executed: "${sql}"`);
    console.log(e)
  }

}
