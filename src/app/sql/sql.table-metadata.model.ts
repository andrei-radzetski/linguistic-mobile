export class SQLTableMetadata {

  private fields: string[] = new Array<string>();

  constructor(public name: string, fields: string[], public order: string[]) {
    this.fields = fields;
  }

  get declaration(): string {
    return this.fields.join(', ');
  }

}
