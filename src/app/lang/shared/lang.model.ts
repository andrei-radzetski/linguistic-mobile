import { Entity } from '../../shared/entity.model';
import { RepositoryConvertible } from '../../repository/repository-convertible';
import { Comparable } from '../../shared/comparable';
import { SQLTableMetadata } from '../../sql/sql.table-metadata.model';

export class Lang extends Entity implements RepositoryConvertible, Comparable<Lang> {

  public static readonly METADATA = new SQLTableMetadata('langs', [
    'id INTEGER PRIMARY KEY',
    'key TEXT',
    'name TEXT',
    'technical INTEGER DEFAULT 0',
    'CONSTRAINT lang_key_unique UNIQUE (key)'
  ], [
    'key', 
    'name',
    'technical'
  ]);

  public key: string;
  public name: string;
  public technical: boolean;

  convertFromRepository(raw: any): Lang {
    let result = new Lang();
    result.id = raw.id;
    result.key = raw.key;
    result.name = raw.name;
    result.technical = raw.technical;

    return result;
  }

  compare(obj: Lang): boolean {
    return obj != null && this.key === obj.key;
  }

}