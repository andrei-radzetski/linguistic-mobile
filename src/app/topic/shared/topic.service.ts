import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Topic } from './topic.model';
import { TopicDAO } from '../topic.dao';

@Injectable()
export class TopicService {

  constructor(private dao: TopicDAO) { }

  findAll(): Observable<Array<Topic>> {
    return this.dao.findAll();
  }

  save(entity: Topic): Observable<Topic> {
    return this.dao.save(entity);
  } 

  count(): Observable<number> {
    return this.dao.count();
  }

}
