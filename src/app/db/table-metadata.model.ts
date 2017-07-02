export class TableMetadata {

  private fields: string[] = new Array<string>();

  constructor(public name: string, fields: string[]) {
    this.fields = fields;
  }

  get declaration(): string {
    return this.fields.join(', ');
  }

}
