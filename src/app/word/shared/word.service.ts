import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Word } from "../shared/word.model";
import { WordRepository } from '../word.repository';
import { DatabaseResultSet } from "../../database/database-result-set.model";

@Injectable()
export class WordService {

  constructor(private repository: WordRepository) { }

  count(): Observable<number> {
    return this.repository.count();
  }

  findAll(): Observable<Array<Word>> {
    return this.repository.findAll();
  }

  save(entity: Word): Observable<DatabaseResultSet> {
    return this.repository.save(entity);
  }

}
