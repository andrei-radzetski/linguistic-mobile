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
    name: 'linguistic90.db',
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
  execute(...queries: SQLQuery[]): Observable<any> {
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
