import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Lang } from './lang.model';
import { LangDAO } from '../lang.dao';

@Injectable()
export class LangService {

  constructor(private dao: LangDAO) { }

  findAll(): Observable<Array<Lang>> {
    return this.dao.findAll();
  }

  count(): Observable<number> {
    return this.dao.count();
  }

  getTechnical(): Observable<Array<Lang>> {
    return this.dao.findAll();
  }

}
