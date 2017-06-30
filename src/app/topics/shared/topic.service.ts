import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of'

import { Topic } from './topic.model';

import { AppMock } from "../../app.mock";

@Injectable()
export class TopicService {

  findAll(): Observable<Array<Topic>> {
    return Observable.of(AppMock.getTopics());
  } 

}
