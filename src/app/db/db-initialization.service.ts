import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DBManagementService } from "./db-management.service";
import { SQLQuery } from "./sql-query.model";
import { Topic } from "../topics/shared/topic.model";
import { Word } from "../words/shared/word.model";
import { Lang } from "../lang/shared/lang.model";

@Injectable()
export class DBInitializationService {

  constructor(private dbManagementService: DBManagementService) { }

  /**
   * Initialize tables and data in the database.
   */
  initialize(): Observable<any> {
    return this.initializeTables()
      .concat(this.initializeTopicsData())
      .concat(this.initializeLangsData());
  }

  /**
   * Create empty tables if not exists.
   */
  private initializeTables(): Observable<any> {
    let topicsSQL = SQLQuery.createTable(Topic.METADATA.name, Topic.METADATA.declaration);
    let wordsSQL = SQLQuery.createTable(Word.METADATA.name, Word.METADATA.declaration);
    let langsSQL = SQLQuery.createTable(Lang.METADATA.name, Lang.METADATA.declaration);

    return this.dbManagementService.executeSQLs(topicsSQL, wordsSQL, langsSQL);
  }

  private initializeTopicsData(): Observable<any> {
    // let sql1 = SQLQuery.insertInto(Topic.METADATA.name, ['NAME'], ['Test topic 1']);
    // let sql2 = SQLQuery.insertInto(Topic.METADATA.name, ['NAME'], ['Test topic 2']);
    // return this.dbManagementService.executeSQLs(sql1, sql2);
    return Observable.empty();
  }

  private initializeLangsData(): Observable<any> {
    let en = SQLQuery.insertInto(Lang.METADATA.name, Lang.METADATA.order, ['en', 'English']);
    let ru = SQLQuery.insertInto(Lang.METADATA.name, Lang.METADATA.order, ['ru', 'Русский']);
    let pl = SQLQuery.insertInto(Lang.METADATA.name, Lang.METADATA.order, ['pl', 'Polski']);

    return this.dbManagementService
      .count(Lang.METADATA.name)
      .flatMap((value: number) => {
        return value > 0
          ? Observable.empty()
          : this.dbManagementService.executeSQLs(en, ru, pl);
      });
  }

}
