import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DBManagementService } from "./db-management.service";
import { SQLQuery } from "./sql-query.model";
import { TableMetadata } from "./table-metadata.model";
import { Topic } from "../topics/shared/topic.model";
import { Word } from "../words/shared/word.model";

/*
  this.dbService.db.executeSql('SELECT count(*) FROM TOPICS', [])
    .then(rs => {
      if (rs.rows.length > 0) {
        for (let i = 0; i < rs.rows.length; i++) {
          console.log(rs.rows.item(i)['count(*)']);
        }
      }
    }).catch(e => console.log(e));

  this.dbService.db.executeSql('SELECT * FROM TOPICS', [])
    .then(rs => {
      if (rs.rows.length > 0) {
        for (let i = 0; i < rs.rows.length; i++) {
          console.log(rs.rows.item(i).ID);
          console.log(rs.rows.item(i).NAME);
        }
      }
    }).catch(e => console.log(e));
*/
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
    let topicsSQL = new SQLQuery(this.buildCreateTableSQL(Topic.METADATA));
    let wordsSQL = new SQLQuery(this.buildCreateTableSQL(Word.METADATA));

    return this.dbManagementService.executeSQLs(topicsSQL, wordsSQL);
  }

  private initializeTopicsData(): Observable<any> {
    let sql = new SQLQuery('INSERT INTO TOPICS (NAME) VALUES (?)', ['Test topic']);

    return this.dbManagementService.executeSQL(sql);
  }

  /**
   *  Build "CREATE TABLE IF NOT EXISTS" SQL query.  
   */
  private buildCreateTableSQL(metadata: TableMetadata): string {
    return `CREATE TABLE IF NOT EXISTS ${metadata.name} (${metadata.declaration})`;
  }

}
