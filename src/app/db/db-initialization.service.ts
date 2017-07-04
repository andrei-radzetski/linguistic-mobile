import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DBManagementService } from "./db-management.service";
import { SQLQuery } from "./sql-query.model";
import { Topic } from "../topic/shared/topic.model";
import { Word } from "../word/shared/word.model";
import { Lang } from "../lang/shared/lang.model";
import { Settings } from "../settings/shared/settings.model";

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
    let topicsSQL = SQLQuery.createTable(Topic.METADATA.name, Topic.METADATA.declaration);
    let wordsSQL = SQLQuery.createTable(Word.METADATA.name, Word.METADATA.declaration);
    let langsSQL = SQLQuery.createTable(Lang.METADATA.name, Lang.METADATA.declaration);
    let settingsSQL = SQLQuery.createTable(Settings.METADATA.name, Settings.METADATA.declaration);

    return this.dbManagementService.executeSQLs(topicsSQL, wordsSQL, langsSQL, settingsSQL);
  }

  private initializeLangsData(): Observable<any> {
    let en = SQLQuery.insertInto(Lang.METADATA.name, Lang.METADATA.order, ['en', 'English', 1]);
    let ru = SQLQuery.insertInto(Lang.METADATA.name, Lang.METADATA.order, ['ru', 'Русский', 1]);
    let pl = SQLQuery.insertInto(Lang.METADATA.name, Lang.METADATA.order, ['pl', 'Polski', 1]);

    return this.dbManagementService
      .count(Lang.METADATA.name)
      .flatMap((value: number) => {
        return value > 0
          ? Observable.empty()
          : this.dbManagementService.executeSQLs(en, ru, pl);
      });
  }

  private initializeSettingsData(): Observable<any> {
    let settings = SQLQuery.insertInto(Settings.METADATA.name, Settings.METADATA.order, [0, 15, null, 1]);

    return this.dbManagementService
      .count(Settings.METADATA.name)
      .flatMap((value: number) => {
        return value > 0
          ? Observable.empty()
          : this.dbManagementService.executeSQLs(settings);
      });
  }

}
