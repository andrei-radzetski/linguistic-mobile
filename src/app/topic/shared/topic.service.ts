import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Topic } from './topic.model';
import { TopicRepository } from '../topic.repository';
import { DatabaseResultSet } from "../../database/database-result-set.model";

@Injectable()
export class TopicService {

  constructor(private repository: TopicRepository) { }

  count(): Observable<number> {
    return this.repository.count();
  }

  findAll(): Observable<Array<Topic>> {
    return this.repository.findAll();
  }

  save(entity: Topic): Observable<DatabaseResultSet> {
    return this.repository.save(entity);
  }

}
