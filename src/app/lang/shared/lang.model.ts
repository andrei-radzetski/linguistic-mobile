import { TableMetadata } from '../../db/table-metadata.model';
import { Entity } from '../../shared/entity.model';
import { DBConvertible } from '../../db/db-convertible';

export class Lang extends Entity implements DBConvertible {

  public static readonly METADATA = new TableMetadata('LANGS', [
    'ID integer primary key',
    'KEY text',
    'NAME text',
    'CONSTRAINT lang_key_unique UNIQUE (KEY)'
  ], [
    'KEY', 
    'NAME'
  ]);

  public key: string;
  public name: string;

  convertDB(raw: any): Lang {
    let result = new Lang();
    result.id = raw.ID;
    result.key = raw.KEY;
    result.name = raw.NAME;

    return result;
  }

}