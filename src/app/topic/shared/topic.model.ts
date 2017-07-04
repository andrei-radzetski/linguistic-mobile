import { Entity } from '../../shared/entity.model';
import { RepositoryConvertible } from '../../repository/repository-convertible';
import { SQLTableMetadata } from '../../sql/sql.table-metadata.model';

export class Topic extends Entity implements RepositoryConvertible {

  public static readonly METADATA = new SQLTableMetadata('TOPICS', [
    'ID integer primary key',
    'NAME text',
    'COMMENT text',
    'CONSTRAINT topic_name_unique UNIQUE (NAME)',
  ], [
    'NAME', 
    'COMMENT'
  ]);

  public name: string;
  public comment: string;
  // calculate
  public wordsNumber: number;

  constructor(name?: string) {
    super();
    this.name = name;
    this.wordsNumber = 0;
  }

  getWordsNumberTemplate(): string {
    return `${this.wordsNumber} word(s)`;
  }

  convertFromRepository(raw: any): Topic {
    let result = new Topic();
    result.id = raw.ID;
    result.name = raw.NAME;
    result.comment = raw.COMMENT;

    return result
  }

}
