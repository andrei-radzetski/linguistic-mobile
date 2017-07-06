/**
 * Examples:
 * 
 * INSERT - {"rows":{"length":0},"rowsAffected":1,"insertId":1}.
 * SELECT - {"rows":{"length":1},"rowsAffected":0}.
 * UPDATE - {"rows":{"length":0},"rowsAffected":1,"insertId":1}.
 */
export interface DatabaseNativeResultSet {

  rows: DatabaseNativeRows;

  rowsAffected: number;

  insertId: number;

}

/**
 * Example: { "length":0 }.
 */
export interface DatabaseNativeRows {

  length: number;

  item(index: number): any;
  
}

/**
 * Example: { "db":{...}, "txlock":true, "readOnly":false, "executes":[] }.
 */
export interface DatabaseNativeTransactionResultSet {

  db: DatabaseNativeTransactionDB;

  txlock: boolean;

  readOnly: boolean;

  executes: any[];

}

/**
 * Example: { "openargs":{...}, "dbname":"linguistic17.db" }.
 */
export interface DatabaseNativeTransactionDB {
  
  openargs: DatabaseNativeTransactionDBOpenargs;
  
  dbname: string;

}
/**
 * Example: { "name":"linguistic17.db", "location":"default", "dblocation":"nosync" }.
 */
export interface DatabaseNativeTransactionDBOpenargs {

  name: string;
  
  location: string;

  dblocation: string;

}

/**
 * Example: { "code":5, "message":"no such column: wwwww" }.
 */
export interface DatabaseNativeError {

  code: number;

  message: string;

}
