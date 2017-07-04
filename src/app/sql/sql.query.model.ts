export class SQLQuery {

  public static readonly COUNT_STATEMENT = 'COUNT(*)';

  public static readonly ALL_OPERATOR = '*';

  constructor(public sql: string, public values?: any) { }

}
