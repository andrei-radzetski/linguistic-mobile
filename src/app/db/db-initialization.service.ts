import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DBManagementService } from "./db-management.service";
import { SQLQuery } from "./sql-query.model";
import { Topic } from "../topics/shared/topic.model";
import { Word } from "../words/shared/word.model";

@Injectable()
export class DBInitializationService {

  constructor(private dbManagementService: DBManagementService) { }

  /**
   * Initialize tables and data in the database.
   */
  initialize() {
    this.initializeTables()
      .concat(this.initializeTopicsData())
      .subscribe();
  }

  /**
   * Create empty tables if not exists.
   */
  private initializeTables(): Observable<any> {
    let topicsSQL = SQLQuery.createTable(Topic.METADATA.name, Topic.METADATA.declaration);
    let wordsSQL = SQLQuery.createTable(Word.METADATA.name, Word.METADATA.declaration);

    return this.dbManagementService.executeSQLs(topicsSQL, wordsSQL);
  }

  private initializeTopicsData(): Observable<any> {
    // todo remove
    let sql1 = SQLQuery.insertInto(Topic.METADATA.name, ['NAME'], ['Test topic 1']);
    let sql2 = SQLQuery.insertInto(Topic.METADATA.name, ['NAME'], ['Test topic 2']);

    return this.dbManagementService.executeSQLs(sql1, sql2);
  }

}
