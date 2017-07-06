import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Database } from "./database";
import { SQLQuery } from "../sql/sql.query.model";
import { SQLQueryBuilder } from "../sql/sql.query-builder";

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

  count(tableName: string): Observable<number> {
    this.log(new SQLQueryBuilder(tableName).count().build());
    return Observable.of(0);
  }

  executeSQLs(...queries: SQLQuery[]): Observable<any> {
    return Observable
      .from(queries)
      .flatMap((query: SQLQuery) => this.executeSQL(query));
  }

  executeSQL(query: SQLQuery): Observable<any> {
    this.log(query);
    return Observable.of(DatabaseMock.MOCK_RESULT_SET);
  }

  private log(query: SQLQuery) {
    console.log(`SQL was executed (Mock DB): "${query.sql}"`);
  }

}
