import { TableMetadata } from '../../db/table-metadata.model';
import { Entity } from '../../shared/entity.model';
import { DBConvertible } from '../../db/db-convertible';
import { Lang } from '../../lang/shared/lang.model';

export class Settings extends Entity implements DBConvertible {

  public static readonly METADATA = new TableMetadata('SETTINGS', [
    'ID INTEGER primary key',
    'AUTO INTEGER DEFAULT 0',
    'EVERY INTEGER',
    'LAST_SYNC text',
    'LANG_ID INTEGER',
    'FOREIGN KEY(LANG_ID) REFERENCES LANGS(ID)'
  ], [
    'AUTO', 
    'EVERY',
    'LAST_SYNC',
    'LANG_ID'
  ]);

  auto: boolean = false;
  every: number;
  lastSync: string;
  lang: Lang;

  convertDB(raw: any): Settings {
    let result = new Settings();
    
    result.id = raw.ID;
    result.auto = raw.AUTO;
    result.every = raw.EVERY;
    result.lastSync = raw.LAST_SYNC;
    
    if (raw.LANG_ID) {
      let lang = new Lang();
      lang.id = raw.LANG_ID;
      lang.key = raw.LANG_KEY;
      lang.name = raw.LANG_NAME;
      lang.technical = raw.LANG_TECHNICAL;

      result.lang = lang;
    }
    
    return result;
  }

}