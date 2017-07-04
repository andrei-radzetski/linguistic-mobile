import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Lang } from './lang.model';
import { LangRepository } from '../lang.repository';

@Injectable()
export class LangService {

  constructor(private repository: LangRepository) { }

  findAll(): Observable<Array<Lang>> {
    return this.repository.findAll();
  }

  count(): Observable<number> {
    return this.repository.count();
  }

  getTechnical(): Observable<Array<Lang>> {
    return this.repository.findAll();
  }

}
