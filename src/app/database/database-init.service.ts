import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Topic } from "../topic/shared/topic.model";
import { Word } from "../word/shared/word.model";
import { Lang } from "../lang/shared/lang.model";
import { Settings } from "../settings/shared/settings.model";
import { SQLQueryBuilder } from "../sql/sql.query-builder";
import { DatabaseService } from "./database.service";

@Injectable()
export class DatabaseInitService {

  constructor(private db: DatabaseService) { }

  /**
   * Initialize tables and data in the database.
   */
  initialize(): Observable<any> {
    return this.initializeTables()
      .concat(this.initializeLangsData())
      .concat(this.testTopics());
    // .concat(this.initializeSettingsData());
  }

  private testTopics(): Observable<any> {
    let o1 = new SQLQueryBuilder(Topic.METADATA.name).insertInto(Topic.METADATA.order).build(['Topic 1', 'Topic comment 1']);
    let o2 = new SQLQueryBuilder(Topic.METADATA.name).insertInto(Topic.METADATA.order).build(['Topic 2', 'Topic comment 2']);

    return this.db.count(Topic.METADATA.name)
      .flatMap((value: number) => value > 0 ? Observable.empty() : this.db.executeSQLs(o1, o2));
  }

  /**
   * Create empty tables if not exists.
   */
  private initializeTables(): Observable<any> {

    let topics = new SQLQueryBuilder(Topic.METADATA.name).createTableIfNotExists(Topic.METADATA.declaration);
    let words = new SQLQueryBuilder(Word.METADATA.name).createTableIfNotExists(Word.METADATA.declaration);
    let langs = new SQLQueryBuilder(Lang.METADATA.name).createTableIfNotExists(Lang.METADATA.declaration);
    let settings = new SQLQueryBuilder(Settings.METADATA.name).createTableIfNotExists(Settings.METADATA.declaration);

    return this.db.executeSQLs(topics.build(), words.build(), langs.build(), settings.build());
  }

  private initializeLangsData(): Observable<any> {
    let en = new SQLQueryBuilder(Lang.METADATA.name).insertInto(Lang.METADATA.order).build(['en', 'English', 1]);
    let ru = new SQLQueryBuilder(Lang.METADATA.name).insertInto(Lang.METADATA.order).build(['ru', 'Русский', 1]);
    let pl = new SQLQueryBuilder(Lang.METADATA.name).insertInto(Lang.METADATA.order).build(['pl', 'Polski', 1]);

    return this.db.count(Lang.METADATA.name)
      .flatMap((value: number) => value > 0 ? Observable.empty() : this.db.executeSQLs(en, ru, pl));
  }

  // private initializeSettingsData(): Observable<any> {
  //   let settings = new SQLQueryBuilder(Settings.METADATA.name).insertInto(Settings.METADATA.order);

  //   return this.db
  //     .count(Settings.METADATA.name)
  //     .flatMap((value: number) => {
  //       return value > 0
  //         ? Observable.empty()
  //         : this.db.executeSQLs(settings.build([0, 15, null, 1]));
  //     });
  // }

}
