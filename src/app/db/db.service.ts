import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject, SQLiteDatabaseConfig } from '@ionic-native/sqlite';
import { Observable, Observer } from 'rxjs';

/**
 * Database service. Creates, opens and gets database instance.
 */
@Injectable()
export class DbService {

  public static readonly DB_NAME = 'linguistic.db';
  public static readonly DB_LOCATION = 'default';

  private _db: SQLiteObject;

  constructor(private sqlite: SQLite) { }

  /**
   * Create or open db connection.
   * 
   * @return {Observable<SQLiteObject>} Returns observable.
   */
  open(): Observable<SQLiteObject> {
    return Observable.create((observer: Observer<SQLiteObject>) => {
      this.sqlite.create(this.createConfig())
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
   * Create config for database.
   */
  private createConfig(): SQLiteDatabaseConfig {
    return {
      name: DbService.DB_NAME,
      location: DbService.DB_LOCATION
    };
  }

  /**
   * Successful open database callback.
   */
  private onOpenSuccess(observer: Observer<SQLiteObject>, db: SQLiteObject) {
    console.log('Database was opened successful.');
    this._db = db;
    observer.next(db);
    observer.complete();
  }

  /**
   * Failure open database callback.
   */
  private onOpenFailure(observer: Observer<SQLiteObject>, e: any) {
    console.log('Database opening failure.')
    console.log(e)
    observer.error(e);
  }

}
