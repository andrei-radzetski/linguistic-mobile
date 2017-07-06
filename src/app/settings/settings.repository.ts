import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Settings } from './shared/settings.model';
import { SQLQueryBuilder } from '../sql/sql.query-builder';
import { AbstractRepository } from '../repository/abstract.repository';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class SettingsRepository extends AbstractRepository<Settings> {

  constructor(db: DatabaseService) {
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

  getCurrentLangKey(): Observable<string> {
    let sql = new SQLQueryBuilder(this.metadata.name)
      .select('langs.key')
      .leftOuterJoin('langs')
      .on('settings.lang_id = langs.id')
      .limit(1)
      .build();

    return this.db
      .executeSQL(sql)
      .flatMap((element: any) => Observable.of(element.key));
  }

  getSettings(): Observable<Settings> {
    let sql = new SQLQueryBuilder(this.metadata.name)
      .select('settings.*, langs.name AS lang_name, langs.key AS lang_key, langs.technical AS lang_technical')
      .leftOuterJoin('langs')
      .on('settings.lang_id = langs.id')
      .limit(1)
      .build();

    return this.db
      .executeSQL(sql)
      .flatMap((element: any) => Observable.of(this.creator.create().convertFromRepository(element)));
  }

}
