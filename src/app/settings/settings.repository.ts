import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Settings } from './shared/settings.model';
import { SQLQueryBuilder } from '../sql/sql.query-builder';
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

  saveLang(id: number, langId: number): Observable<any> {
    let builder = new SQLQueryBuilder(Settings.METADATA.name)
      .update(['lang_id'], [langId])
      .where(`id = ${id}`);

    return this.db.executeSQL(builder.build());
  }

  getSettings(): Observable<Settings> {
    let builder = new SQLQueryBuilder(this.metadata.name)
      .select('settings.*, langs.name AS lang_name, langs.key AS lang_key, langs.technical AS lang_technical')
      .leftOuterJoin('langs')
      .on('settings.lang_id = langs.id')
      .limit(1);

    return this.db.selectOne(builder.build())
      .flatMap((element: any) => Observable.of(this.creator.create().convertFromRepository(element)));
  }

}
