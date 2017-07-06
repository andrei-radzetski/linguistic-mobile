/**
 * Examples:
 * 
 * {"code":5,"message":"no such column: wwwww"}
 */
export interface DatabaseNativeError {

  code: number;

  message: string;

}
