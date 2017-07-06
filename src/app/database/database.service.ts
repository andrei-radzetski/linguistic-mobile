import { Injectable } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite';
import { Observable, Observer } from 'rxjs';

import { Database } from "./database";
import { DatabaseMock } from "./database.mock";
import { DatabaseSQLite } from "./database.sqlite";
import { SQLQuery } from "../sql/sql.query.model";
import { DatabaseResult } from "./database-result.model";

/**
 * Database service.
 */
@Injectable()
export class DatabaseService implements Database {

  private _db: Database;

  constructor(
    private sqlite: SQLite,
    private mock: DatabaseMock,
    private real: DatabaseSQLite) {

  }

  /**
   * Check if database is available on the device.
   * If available returns real db implementation, 
   * otherwise returns mock.
   */
  private chooseDB(): Observable<Database> {
    return Observable.create((observer: Observer<Database>) => {
      this.sqlite.echoTest()
        .then(() => {
          console.log("SQLite plugin is available in the application...");
          console.log("Try to use REAL database...");

          observer.next(this.real);
          observer.complete();
        })
        .catch(() => {
          console.log("SQLite plugin is NOT available in the application...");
          console.log("Try to use MOCK database...");

          observer.next(this.mock);
          observer.complete();
        });
    });
  }

  /**
   * Get database instance.
   */
  get db(): Database {
    if (!this._db) {
      throw new Error("Database instance is null.")
    }
    return this._db;
  }

  open(): Observable<any> {
    return this.chooseDB().flatMap((db: Database) => {
      this._db = db;
      return db.open();
    });
  }

  executeSQLs(...queries: SQLQuery[]): Observable<any> {
    return this.db.executeSQLs(...queries);
  }

  executeSQL(query: SQLQuery): Observable<DatabaseResult> {
    return this.db.executeSQL(query);
  }

  select(query: SQLQuery): Observable<Array<any>> {
    return this.db.select(query);
  }

  selectOne(query: SQLQuery): Observable<any> {
    return this.db.selectOne(query);
  }

  all(tableName: string): Observable<Array<any>> {
    return this.db.all(tableName);
  }

  count(tableName: string): Observable<number> {
    return this.db.count(tableName);
  }

}
