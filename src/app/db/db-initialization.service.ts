import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DBManagementService } from "./db-management.service";
import { SQLQuery } from "./sql-query.model";
import { TableMetadata } from "./table-metadata.model";
import { Topic } from "../topics/shared/topic.model";
import { Word } from "../words/shared/word.model";

/*
  //todo
  
  tx.executeSql('INSERT INTO TOPICS (NAME) VALUES (?)', ['Bla1'], null, e => this.error('TOPICS', e));
  tx.executeSql('INSERT INTO TOPICS (NAME) VALUES (?)', ['Bla2'], null, e => this.error('TOPICS', e));
  tx.executeSql('INSERT INTO TOPICS (NAME) VALUES (?)', ['Bla3'], null, e => this.error('TOPICS', e));

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
    this.createTables().subscribe();
  }

  /**
   * Create empty tables if not exists.
   */
  private createTables(): Observable<any> {
    let topicsSQL = new SQLQuery(this.buildCreateTableSQL(Topic.METADATA));
    let wordsSQL = new SQLQuery(this.buildCreateTableSQL(Word.METADATA));

    return this.dbManagementService.execute(topicsSQL, wordsSQL);
  }
  
  /**
   *  Build "CREATE TABLE IF NOT EXISTS" SQL query.  
   */
  private buildCreateTableSQL(metadata: TableMetadata): string {
    return `CREATE TABLE IF NOT EXISTS ${metadata.name} (${metadata.declaration})`;
  }

}
