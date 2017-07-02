import { TableMetadata } from '../../db/table-metadata.model';
import { Entity } from '../../shared/entity.model';
import { DBConvertible } from '../../db/db-convertible';

export class Topic extends Entity implements DBConvertible {

  public static readonly METADATA = new TableMetadata('TOPICS', [
    'ID integer primary key',
    'NAME text'
  ]);

  public name: string;
  public wordsNumber: number;

  constructor(name?: string) {
    super();
    this.name = name;
    this.wordsNumber = 0;
  }

  getWordsNumberTemplate(): string {
    return `${this.wordsNumber} word(s)`;
  }

  convertDB(raw: any): Topic {
    let result = new Topic();
    result.id = raw.ID;
    result.name = raw.NAME;

    return result
  }

}
