import { Observable } from 'rxjs';

import { SQLQuery } from "../sql/sql.query.model";
import { DatabaseResult } from "./database-result.model";

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
   * Execute SQL queries in transaction.
   * 
   * @param {SQLQuery[]} queries SQL queries.
   */
  executeSQLs(...queries: SQLQuery[]): Observable<any>;

  /**
   * Execute single SQL query.
   * 
   * @param {SQLQuery} query SQL query.
   */
  executeSQL(query: SQLQuery): Observable<DatabaseResult>;

  /**
   * Execute SQL query and get rows.
   * 
   * @param {SQLQuery} query SQL query.
   */
  select(query: SQLQuery): Observable<Array<any>>;

  /**
   * Execute SQL query and get first result.
   * 
   * @param {SQLQuery} query SQL query.
   */
  selectOne(query: SQLQuery): Observable<any>;

  /**
   * Get all orders of the specified table.
   *
   * @param {string} tableName Table name.
   */
  all(tableName: string): Observable<Array<any>>;

  /**
   * Get count of the specified table.
   * 
   * @param {string} tableName Table name.
   */
  count(tableName: string): Observable<number>;

}