import { Injectable } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite';
import { Observable, Observer } from 'rxjs';

import { Database } from "./database";
import { DatabaseMock } from "./database.mock";
import { DatabaseSQLite } from "./database.sqlite";

/**
 * Database service.
 */
@Injectable()
export class DatabaseService1 implements Database {

  private db: Database;

  constructor(
    private sqlite: SQLite,
    private mock: DatabaseMock,
    private real: DatabaseSQLite) {

  }

  open(): Observable<any> {
    return Observable.create((observer: Observer<Database>) => {
      this.sqlite.echoTest()
        .then(() => {
          console.log("SQLite plugin is available in application...");
          console.log("Try to use REAL database...");

          observer.next(this.real);
          observer.complete();
        })
        .catch(() => {
          console.log("SQLite plugin is NOT available in application...");
          console.log("Try to use MOCK database...");

          observer.next(this.mock);
          observer.complete();
        });
    }).flatMap((db: Database) => {
      this.db = db;
      return db.open();
    });
  }

}
