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
    "SELECT ss.*, ll.NAME AS LANG_NAME, ll.KEY AS LANG_KEY, ll.TECHNICAL AS LANG_TECHNICAL " + 
    "FROM SETTINGS AS ss " + 
    "LEFT OUTER JOIN LANGS AS ll "+
    "ON ss.LANG_ID = ll.ID " + 
    "LIMIT 1";

    return this.db.selectOne(new SQLQuery(sql))
      .flatMap((element: any) => Observable.of(this.creator.create().convertFromRepository(element)));
  }

}
