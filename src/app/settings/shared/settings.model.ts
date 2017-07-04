import { Entity } from '../../shared/entity.model';
import { Lang } from '../../lang/shared/lang.model';
import { RepositoryConvertible } from '../../repository/repository-convertible';
import { SQLTableMetadata } from '../../sql/sql.table-metadata.model';

export class Settings extends Entity implements RepositoryConvertible {

  public static readonly METADATA = new SQLTableMetadata('SETTINGS', [
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

  convertFromRepository(raw: any): Settings {
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