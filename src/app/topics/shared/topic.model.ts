import { TableMetadata } from "../../db/table-metadata.model";
import { Entity } from "../../db/entity.model";

export class Topic extends Entity {

  public static readonly METADATA = new TableMetadata('TOPICS', [
    'ID integer primary key',
    'NAME text'
  ]);

  public name: string;
  public wordsNumber: number;

  constructor(name?: string) {
    super();
    this.name = name;
  }

  getWordsNumberTemplate(): string {
    return `${this.wordsNumber} word(s)`;
  }

}
