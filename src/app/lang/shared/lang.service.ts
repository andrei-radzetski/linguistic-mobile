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
    let en = new Lang();
    en.key = "en";
    en.name = "English";

    let ru = new Lang();
    ru.key = "ru";
    ru.name = "Русский";

    let pl = new Lang();
    pl.key = "pl";
    pl.name = "Polski";

    return Observable.of([en, ru, pl]);
  }

}
