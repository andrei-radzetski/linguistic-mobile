import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Settings } from './shared/settings.model';
import { SQLQuery } from '../sql/sql.query.model';
import { AbstractRepository } from '../repository/abstract.repository';
import { DBManagementService } from '../db/db-management.service';

@Injectable()
export class SettingsRepository extends AbstractRepository<Settings> {

  constructor(db: DBManagementService) {
    super(db, Settings.METADATA, { create: (): Settings => new Settings() });
  }

  mapValues(entity: Settings): Array<string> {
    return [];
  }

  getSettings(): Observable<Settings> {
    let sql = 
    "SELECT settings.*, langs.name AS lang_name, langs.key AS lang_key, langs.technical AS lang_technical " + 
    "FROM settings " + 
    "LEFT OUTER JOIN langs "+
    "ON settings.lang_id = langs.id " + 
    "LIMIT 1";

    return this.db.selectOne(new SQLQuery(sql))
      .flatMap((element: any) => Observable.of(this.creator.create().convertFromRepository(element)));
  }

}
