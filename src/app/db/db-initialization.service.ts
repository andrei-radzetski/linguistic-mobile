import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { SQLiteTransaction } from '@ionic-native/sqlite';

import { DbService } from "./db.service";
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
export class DbInitializationService {

  constructor(private dbService: DbService) { }

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
    return Observable.create((observer: Observer<any>) => {
      this.dbService.db.transaction((tx: SQLiteTransaction) => {
        this.executeSql(tx, this.buildCreateTableSQL(Topic.TABLE_NAME, Topic.TABLE_DECLARATION));
        this.executeSql(tx, this.buildCreateTableSQL(Word.TABLE_NAME, Word.TABLE_DECLARATION));
      });
    });
  }

  /**
   * Execute sql query in the transaction. 
   */
  private executeSql(tx: SQLiteTransaction, sql: string, values?: any) {
    tx.executeSql(sql, values, () => this.success(sql), e => this.error(sql, e))
  }

  /**
   * Successful execution sql query callback.
   */
  private success(sql: string) {
    console.log(`SQL was executed: "${sql}"`);
  }

  /**
   * Failure execution sql query callback.
   */
  private error(sql: string, e: any) {
    console.log(`SQL was NOT executed: "${sql}"`);
    console.log(e)
  }

  /**
   *  Build "CREATE TABLE IF NOT EXISTS" sql query.  
   */
  private buildCreateTableSQL(name: string, declaration: string): string {
    return `CREATE TABLE IF NOT EXISTS ${name} (${declaration})`;
  }

}
