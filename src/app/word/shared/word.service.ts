import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'

import { WordGroup } from './word-group.model';
import { Topic } from '../../topic/shared/topic.model';
import { WordDAO } from '../word.dao';

@Injectable()
export class WordService {

  constructor(private dao: WordDAO) { }

  findAll(): Observable<Array<WordGroup>> {
    // this.dao.findAll();
    return Observable.of([]);
  }

  count(): Observable<number> {
    return this.dao.count();
  }

  findByTopic(topic: Topic): Observable<Array<WordGroup>> {
    return Observable.of([]);
  }

}
