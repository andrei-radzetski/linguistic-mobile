import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Lang } from './shared/lang.model';
import { AbstractRepository } from '../repository/abstract.repository';
import { DBManagementService } from '../db/db-management.service';

@Injectable()
export class LangRepository extends AbstractRepository<Lang> {

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
