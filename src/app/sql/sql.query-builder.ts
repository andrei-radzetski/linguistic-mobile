import { SQLQuery } from "./sql.query.model";

export class SQLQueryBuilder {

  private sql: string;

  constructor(private tableName: string) { }

  /**
   * Initialize "CREATE TABLE IF NOT EXISTS ... (...)" SQL query.
   * 
   * @param {string} declaration Fields declaration.
   */
  createTableIfNotExists(declaration: string): SQLQueryBuilder {
    this.sql = `CREATE TABLE IF NOT EXISTS ${this.tableName} (${declaration})`;
    return this;
  }

  /**
   * Initialize "SELECT ... FROM ..." SQL query.
   * 
   * @param {string} name Table name. 
   */
  select(colums: string): SQLQueryBuilder {
    this.sql = `SELECT ${colums} FROM ${this.tableName}`;
    return this;
  }

  /**
   * Initialize "UPDATE ... SET ..." SQL query.
   * 
   * @param {string[]} fields Fields names.
   * @param {any[]} fields Values.
   */
  update(fields: string[], values: any[]): SQLQueryBuilder {
    this.sql = `UPDATE ${this.tableName} SET `;

    for (var i = 0; i < fields.length; i++) {
      if (i > 0) {
        this.sql += ', '
      }
      this.sql += `${fields[i]} = ${values[i]}`;
    }
    return this;
  }

  /**
   * Initialize "INSERT INTO ... VALUES (...)" SQL query.
   * 
   * @param {string[]} fields Fields name. 
   */
  insertInto(fields: string[] = []): SQLQueryBuilder {
    let fieldsOrder = fields.join(', ');
    let placement = new Array<string>(fields.length).fill('?');

    this.sql = `INSERT INTO ${this.tableName} (${fieldsOrder}) VALUES (${placement})`;
    return this;
  }

  /**
   * Initialize "SELECT COUNT(*) ... FROM ..." SQL query.
   */
  count(): SQLQueryBuilder {
    this.sql = `SELECT ${SQLQuery.COUNT_STATEMENT} FROM ${this.tableName}`;
    return this;
  }

  /**
   * Add "WHERE" clause.
   * 
   * @param {string} conditions Conditions.
   */
  where(conditions: string): SQLQueryBuilder {
    this.sql += ` WHERE ${conditions}`;
    return this;
  }

  /**
   * Add "LIMIT" clause.
   * 
   * @param {number} number Number.
   */
  limit(number: number): SQLQueryBuilder {
    this.sql += ` LIMIT ${number}`;
    return this;
  }
  
  /**
   * Add "LEFT OUTER JOIN" clause.
   * 
   * @param {string} tableName Joined table name.
   */
  leftOuterJoin(tableName: string): SQLQueryBuilder {
    this.sql += ` LEFT OUTER JOIN ${tableName}`;
    return this;
  }

  /**
   * Add "ON" clause.
   * 
   * @param {string} condition Condition.
   */
  on(condition: string): SQLQueryBuilder {
    this.sql += ` ON ${condition}`;
    return this;
  }

  build(values?: any): SQLQuery {
    return new SQLQuery(this.sql, values);
  }

  toString(): string {
    return this.sql;
  }

}
