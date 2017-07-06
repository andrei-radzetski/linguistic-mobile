import { Entity } from '../../shared/entity.model';
import { RepositoryConvertible } from '../../repository/repository-convertible';
import { SQLTableMetadata } from '../../sql/sql.table-metadata.model';

export class Topic extends Entity implements RepositoryConvertible {

  public static readonly METADATA = new SQLTableMetadata('topics', [
    'id INTEGER PRIMARY KEY',
    'name TEXT',
    'comment TEXT',
    'CONSTRAINT topic_name_unique UNIQUE (name)',
  ], [
    'name', 
    'comment'
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

  convertFromRepository(raw: any): Topic {
    let result = new Topic();
    result.id = raw.id;
    result.name = raw.name;
    result.comment = raw.comment;

    return result
  }

}
