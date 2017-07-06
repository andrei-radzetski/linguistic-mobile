import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Topic } from './topic.model';
import { TopicRepository } from '../topic.repository';
import { DatabaseResultSet } from "../../database/database-result-set.model";
import { DatabaseNativeResultSet } from "../../database/database-native.model";

@Injectable()
export class TopicService {

  constructor(private repository: TopicRepository) { }

  count(): Observable<number> {
    return this.repository.count();
  }

  findAll(): Observable<Array<Topic>> {
    return this.repository.findAll();
  }

  save(entity: Topic): Observable<DatabaseNativeResultSet> {
    return this.repository.save(entity);
  }

  delete(id: number): Observable<DatabaseNativeResultSet> {
    return this.repository.delete(id);
  }

}
