import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Database } from "./database";
import { SQLQuery } from "../sql/sql.query.model";

/**
 * Mock database implementation.
 * Use database service instead of.
 * 
 * @hidden
 */
@Injectable()
export class DatabaseMock implements Database {

  open(): Observable<any> {
    console.log('Mock database was opened successful.');
    return Observable.empty();
  }

  executeSQLs(...queries: SQLQuery[]): Observable<any> {
    return Observable.empty();
  }

  executeSQL(query: SQLQuery): Observable<any> {
    return Observable.empty();
  }

  select(query: SQLQuery): Observable<Array<any>> {
    return Observable.empty();
  };

  selectOne(query: SQLQuery): Observable<any> {
    return Observable.empty();
  }

  all(tableName: string): Observable<Array<any>> {
    return Observable.empty();
  }

  count(tableName: string): Observable<number> {
    return Observable.empty();
  }

}
