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

  private static readonly MOCK_RESULT_SET = { rows: { length: 0 } };

  open(): Observable<any> {
    console.log('Mock database was opened successful.');
    return Observable.of(null);
  }

  executeSQLs(...queries: SQLQuery[]): Observable<any> {
    return Observable
      .from(queries)
      .flatMap((query: SQLQuery) => this.executeSQL(query));
  }

  executeSQL(query: SQLQuery): Observable<any> {
    this.logSQL(query);
    return Observable.of(DatabaseMock.MOCK_RESULT_SET);
  }

  select(query: SQLQuery): Observable<Array<any>> {
    this.logSQL(query);
    return Observable.of([]);
  };

  selectOne(query: SQLQuery): Observable<any> {
    return this.executeSQL(query);
  }

  all(tableName: string): Observable<Array<any>> {
    return Observable.empty();
  }

  count(tableName: string): Observable<number> {
    return Observable.empty();
  }

  private logSQL(query: SQLQuery) {
    console.log(`SQL was executed (Mock DB): "${query.sql}"`);
  }

}
