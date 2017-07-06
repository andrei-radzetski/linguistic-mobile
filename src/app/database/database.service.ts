import { Injectable } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite';
import { Observable, Observer } from 'rxjs';

import { Database } from "./database";
import { DatabaseMock } from "./database.mock";
import { DatabaseSQLite } from "./database.sqlite";
import { SQLQuery } from "../sql/sql.query.model";
import { DatabaseResultSet } from "./database-result-set.model";
import { DatabaseNativeTransactionResultSet } from "./database-native.model";

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

  count(tableName: string): Observable<number> {
    return this.db.count(tableName);
  }

  executeSQLs(...queries: SQLQuery[]): Observable<DatabaseNativeTransactionResultSet> {
    return this.db.executeSQLs(...queries);
  }

  executeSQL(query: SQLQuery): Observable<DatabaseResultSet> {
    return this.db.executeSQL(query);
  }

}
