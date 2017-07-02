export class SQLQuery {

  public static readonly COUNT_STATEMENT = 'COUNT(*)';

  constructor(public sql: string, public values?: any) { }

  /**
   * Build "CREATE TABLE IF NOT EXISTS" SQL query.
   * 
   * @param {string} name Table name.
   * @param {string} declaration Fields declaration.
   */
  static createTable(name: string, declaration: string): SQLQuery {
    return new SQLQuery(`CREATE TABLE IF NOT EXISTS ${name} (${declaration})`);
  }

  /**
   * Build "INSERT INTO" SQL query.
   * 
   * @param {string} name Table name. 
   * @param {string[]} fields Fields name. 
   * @param {any[]} values Values. 
   */
  static insertInto(name: string, fields: string[] = new Array<string>(), values: any[]): SQLQuery {
    let fieldsOrder = fields.length > 0 ? fields.join(', ') : '';
    let placement = new Array<string>(fields.length).fill('?');

    return new SQLQuery(`INSERT INTO ${name} (${fieldsOrder}) VALUES (${placement})`, values);
  }

  /**
   * Build "SELECT COUNT(*)" SQL query.
   * 
   * @param {string} name Table name. 
   */
  static count(name: string): SQLQuery {
    return new SQLQuery(`SELECT ${SQLQuery.COUNT_STATEMENT} FROM ${name}`);
  }

  /**
   * Build "SELECT *" SQL query.
   * 
   * @param {string} name Table name. 
   */
  static selectAll(name: string): SQLQuery {
    return new SQLQuery(`SELECT * FROM ${name}`);
  }

}
