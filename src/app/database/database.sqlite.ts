import { Injectable } from '@angular/core';
import { SQLiteDatabaseConfig, SQLiteObject, SQLite } from '@ionic-native/sqlite';
import { Observable, Observer } from 'rxjs';

import { Database } from "./database";

/**
 * SQLite database implementation.
 * Use database service instead of.
 * 
 * @hidden
 */
@Injectable()
export class DatabaseSQLite implements Database {

  public static readonly DATABASE_CONFIG: SQLiteDatabaseConfig = {
    name: 'linguistic1.db',
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
          observer.complete();
        })
        .catch(e => {
          console.log('SQLite database opening failure.')
          console.log(e)
          observer.error(e);
        });
    });
  }

}
