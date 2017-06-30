import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of'

import { WordGroup } from "./word-group.model";
import { Topic } from "../../topics/shared/topic.model";
import { AppMock } from '../../app.mock';

@Injectable()
export class WordService {

  findByTopic(topic: Topic): Observable<Array<WordGroup>> {
    return Observable.of(AppMock.getWords(topic));
  }

}
