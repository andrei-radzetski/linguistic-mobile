import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Topic } from './topic.model';
import { TopicRepository } from '../topic.repository';

@Injectable()
export class TopicService {

  constructor(private repository: TopicRepository) { }

  findAll(): Observable<Array<Topic>> {
    return this.repository.findAll();
  }

  save(entity: Topic): Observable<Topic> {
    return this.repository.save(entity);
  }

  count(): Observable<number> {
    return this.repository.count();
  }

}
