import { Observable } from 'rxjs';

import { SQLQuery } from "../sql/sql.query.model";
import { DatabaseResultSet } from "./database-result-set.model";

/**
 * Database interface. Provides commons database methods.
 */
export interface Database {

  /**
   * Create or open db connection.
   * 
   * @return {Observable<SQLiteObject>} Returns observable.
   */
  open(): Observable<any>;

  /**
   * Get count of the specified table.
   * 
   * @param {string} tableName Table name.
   */
  count(tableName: string): Observable<number>;

  /**
   * Execute SQL queries in a transaction.
   * 
   * @param {SQLQuery[]} queries SQL queries.
   */
  executeSQLs(...queries: SQLQuery[]): Observable<any>;

  /**
   * Execute single SQL query.
   * 
   * @param {SQLQuery} query SQL query.
   */
  executeSQL(query: SQLQuery): Observable<DatabaseResultSet>;

}
