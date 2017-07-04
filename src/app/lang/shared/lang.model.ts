import { Entity } from '../../shared/entity.model';
import { RepositoryConvertible } from '../../repository/repository-convertible';
import { Comparable } from '../../shared/comparable';
import { SQLTableMetadata } from '../../sql/sql.table-metadata.model';

export class Lang extends Entity implements RepositoryConvertible, Comparable<Lang> {

  public static readonly METADATA = new SQLTableMetadata('LANGS', [
    'ID integer primary key',
    'KEY text',
    'NAME text',
    'TECHNICAL integer DEFAULT 0',
    'CONSTRAINT lang_key_unique UNIQUE (KEY)'
  ], [
    'KEY', 
    'NAME',
    'TECHNICAL'
  ]);

  public key: string;
  public name: string;
  public technical: boolean;

  convertFromRepository(raw: any): Lang {
    let result = new Lang();
    result.id = raw.ID;
    result.key = raw.KEY;
    result.name = raw.NAME;
    result.technical = raw.TECHNICAL;

    return result;
  }

  compare(obj: Lang): boolean {
    return obj != null && this.key === obj.key;
  }

}