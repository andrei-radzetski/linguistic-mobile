import { Entity } from '../../shared/entity.model';
import { Lang } from '../../lang/shared/lang.model';
import { RepositoryConvertible } from '../../repository/repository-convertible';
import { SQLTableMetadata } from '../../sql/sql.table-metadata.model';

export class Settings extends Entity implements RepositoryConvertible {

  public static readonly METADATA = new SQLTableMetadata('settings', [
    'id INTEGER PRIMARY KEY',
    'autoSync INTEGER DEFAULT 0',
    'every INTEGER',
    'lastSync TEXT',
    'lang_id INTEGER',
    'FOREIGN KEY(lang_id) REFERENCES langs(id)'
  ], [
    'autoSync', 
    'every',
    'lastSync',
    'lang_id'
  ]);

  autoSync: boolean = false;
  every: number;
  lastSync: string;
  lang: Lang;

  constructor() {
    super();
    this.autoSync = false;
  }

  convertFromRepository(raw: any): Settings {
    let result = new Settings();
    
    result.id = raw.id;
    result.autoSync = raw.autoSync;
    result.every = raw.every;
    result.lastSync = raw.lastSync;
    
    if (raw.lang_id) {
      let lang = new Lang();
      lang.id = raw.lang_id;
      lang.key = raw.lang_key;
      lang.name = raw.lang_name;
      lang.technical = raw.lang_technical;

      result.lang = lang;
    }
    
    return result;
  }

}