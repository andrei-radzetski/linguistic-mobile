import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of'

import { Topic } from './topic.model';
import { TopicMock } from "./topic.mock";

@Injectable()
export class TopicService {

  findAll(): Observable<Array<Topic>> {
    return Observable.of(TopicMock.getTopics());
  } 

}
