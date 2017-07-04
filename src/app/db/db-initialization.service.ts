import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Topic } from "../topic/shared/topic.model";
import { Word } from "../word/shared/word.model";
import { Lang } from "../lang/shared/lang.model";
import { Settings } from "../settings/shared/settings.model";
import { SQLQuery } from "../sql/sql.query.model";
import { SQLQueryBuilder } from "../sql/sql.query-builder";
import { DBManagementService } from "./db-management.service";

@Injectable()
export class DBInitializationService {

  constructor(private dbManagementService: DBManagementService) { }

  /**
   * Initialize tables and data in the database.
   */
  initialize(): Observable<any> {
    return this.initializeTables()
      .concat(this.initializeLangsData())
      .concat(this.initializeSettingsData());
  }

  /**
   * Create empty tables if not exists.
   */
  private initializeTables(): Observable<any> {

    let topics = new SQLQueryBuilder(Topic.METADATA.name).createTableIfNotExists(Topic.METADATA.declaration);
    let words = new SQLQueryBuilder(Word.METADATA.name).createTableIfNotExists(Word.METADATA.declaration);
    let langs = new SQLQueryBuilder(Lang.METADATA.name).createTableIfNotExists(Lang.METADATA.declaration);
    let settings = new SQLQueryBuilder(Settings.METADATA.name).createTableIfNotExists(Settings.METADATA.declaration);

    return this.dbManagementService.executeSQLs(topics.build(), words.build(), langs.build(), settings.build());
  }

  private initializeLangsData(): Observable<any> {
    let en = new SQLQueryBuilder(Lang.METADATA.name).insertInto(Lang.METADATA.order).build(['en', 'English', 1]);
    let ru = new SQLQueryBuilder(Lang.METADATA.name).insertInto(Lang.METADATA.order).build(['ru', 'Русский', 1]);
    let pl = new SQLQueryBuilder(Lang.METADATA.name).insertInto(Lang.METADATA.order).build(['pl', 'Polski', 1]);

    return this.dbManagementService
      .count(Lang.METADATA.name)
      .flatMap((value: number) => {
        return value > 0
          ? Observable.empty()
          : this.dbManagementService.executeSQLs(en, ru, pl);
      });
  }

  private initializeSettingsData(): Observable<any> {
    let settings = new SQLQueryBuilder(Settings.METADATA.name).insertInto(Settings.METADATA.order);

    return this.dbManagementService
      .count(Settings.METADATA.name)
      .flatMap((value: number) => {
        return value > 0
          ? Observable.empty()
          : this.dbManagementService.executeSQLs(settings.build([0, 15, null, 1]));
      });
  }

}
