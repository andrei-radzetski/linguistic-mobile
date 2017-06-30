import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of'

import { WordGroup } from "./word-group.model";
import { WordMock } from "./word.mock";

@Injectable()
export class WordService {

  findByTopic(): Observable<Array<WordGroup>> {
    return Observable.of(WordMock.getWords());
  }

}
