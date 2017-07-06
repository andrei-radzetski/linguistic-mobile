import { DatabaseNativeRows } from "./database-native-rows"

/**
 * Examples:
 * 
 * INSERT - {"rows":{"length":0},"rowsAffected":1,"insertId":1}
 * SELECT - {"rows":{"length":1},"rowsAffected":0}
 * UPDATE - {"rows":{"length":0},"rowsAffected":1,"insertId":1}
 */
export interface DatabaseNativeResultSet {

  rows: DatabaseNativeRows;

  rowsAffected: number;

  insertId: number;

}
