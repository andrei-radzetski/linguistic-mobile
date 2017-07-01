import { Injectable } from '@angular/core';

import { DbService } from "./db.service";
import { Topic } from "../topics/shared/topic.model";
import { Word } from "../words/shared/word.model";

@Injectable()
export class DbInitializationService {

  constructor(private dbService: DbService) { }

  initialize() {
    console.log('===============DbInitializationService initialize==============');
  }
  /*
    private init() {
    this.db.transaction((tx: SQLiteTransaction) => {
      this.executeCreateTableSQL(tx, Topic.TABLE_NAME, Topic.TABLE_DECLARATION);
      this.executeCreateTableSQL(tx, Word.TABLE_NAME, Word.TABLE_DECLARATION);

      tx.executeSql('INSERT INTO TOPICS (NAME) VALUES (?)', ['Bla1'], null, e => this.error('TOPICS', e));
      tx.executeSql('INSERT INTO TOPICS (NAME) VALUES (?)', ['Bla2'], null, e => this.error('TOPICS', e));
      tx.executeSql('INSERT INTO TOPICS (NAME) VALUES (?)', ['Bla3'], null, e => this.error('TOPICS', e));
    })
      .then(() => console.log('Database was initialized successful.'))
      .catch(e => {
        console.log('Database initializing failure.')
        console.log(e)
      });
  }

  private executeCreateTableSQL(tx: SQLiteTransaction, name: string, declaration: string) {
    let sql = this.createTableSQL(name, declaration);

    console.log(sql);

    tx.executeSql(sql, [],
      () => this.success(name),
      e => this.error(name, e));
  }

  private createTableSQL(name: string, declaration: string): string {
    return `CREATE TABLE IF NOT EXISTS ${name} (${declaration})`;
  }

  private success(name: string) {
    console.log(`Table "${name}" was created.`);
  }

  private error(name: string, e: any) {
    console.log(`Table "${name}" creation failure.`);
    console.log(e)
  }

  console.log('====================startLearning====================');
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
            console.log('===========================================');
            console.log(rs.rows.item(i).ID);
            console.log(rs.rows.item(i).NAME);
            console.log('===========================================');
          }
        }
      }).catch(e => console.log(e));
  
   */

}
