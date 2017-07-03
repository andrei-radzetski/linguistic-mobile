import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AbstractDAO } from '../db/abstract.dao';
import { Lang } from './shared/lang.model';
import { DBManagementService } from '../db/db-management.service';

@Injectable()
export class LangDAO extends AbstractDAO<Lang> {

  constructor(db: DBManagementService) {
    super(db, Lang.METADATA, { create: (): Lang => new Lang() });
  }

  mapValues(entity: Lang): Array<string> {
    throw new Error('Unsupported operation.');
  }

  save(entity: Lang): Observable<Lang> {
    throw new Error('Unsupported operation.');
  }

}
