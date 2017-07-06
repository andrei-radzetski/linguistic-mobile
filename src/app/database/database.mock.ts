import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Database } from "./database";
import { SQLQuery } from "../sql/sql.query.model";
import { SQLQueryBuilder } from "../sql/sql.query-builder";
import { DatabaseResultSet } from "./database-result-set.model";
import { DatabaseNativeResultSet, DatabaseNativeTransactionResultSet } from "./database-native.model";

/**
 * Mock database implementation.
 * Use database service instead of.
 * 
 * @hidden
 */
@Injectable()
export class DatabaseMock implements Database {

  private static readonly MOCK: DatabaseResultSet = new DatabaseResultSet({
    rows: {
      length: 0,
      item: (index: number) => { }
    },
    rowsAffected: 0,
    insertId: 0
  });

  private static readonly MOCK_TX: DatabaseNativeTransactionResultSet = {
    db: {
      openargs: {
        name: "name_mock",
        location: "location_mock",
        dblocation: "dblocation_mock",
      },
      dbname: "dbname_mock"
    },
    txlock: false,
    readOnly: false,
    executes: []
  };

  open(): Observable<any> {
    console.log('Mock database was opened successful.');
    return Observable.of(null);
  }

  count(tableName: string): Observable<number> {
    this.log(new SQLQueryBuilder(tableName).count().build());
    return Observable.of(0);
  }

  executeSQLs(...queries: SQLQuery[]): Observable<DatabaseNativeTransactionResultSet> {
    return Observable.from(queries)
      .map((query: SQLQuery) => this.log(query))
      .toArray()
      .flatMap(() => Observable.of(DatabaseMock.MOCK_TX));
  }

  executeSQL(query: SQLQuery): Observable<DatabaseResultSet> {
    this.log(query);
    return Observable.of(DatabaseMock.MOCK);
  }

  private log(query: SQLQuery) {
    console.log(`SQL was executed (Mock DB): "${query.sql}"`);
  }

}
