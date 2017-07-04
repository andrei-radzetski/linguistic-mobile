import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'

import { Topic } from '../../topic/shared/topic.model';
import { WordGroup } from './word-group.model';
import { WordRepository } from '../word.repository';

@Injectable()
export class WordService {

  constructor(private repository: WordRepository) { }

  findAll(): Observable<Array<WordGroup>> {
    // this.dao.findAll();
    return Observable.of([]);
  }

  count(): Observable<number> {
    return this.repository.count();
  }

  findByTopic(topic: Topic): Observable<Array<WordGroup>> {
    return Observable.of([]);
  }

}
