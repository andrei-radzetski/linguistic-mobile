import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Lang } from './shared/lang.model';
import { AbstractRepository } from '../repository/abstract.repository';
import { DatabaseService } from '../database/database.service';
import { DatabaseResultSet } from "../database/database-result-set.model";

@Injectable()
export class LangRepository extends AbstractRepository<Lang> {

  constructor(db: DatabaseService) {
    super(db, Lang.METADATA, { create: (): Lang => new Lang() });
  }

  count(): Observable<number> {
    throw new Error('Unsupported operation.');
  }

  findAll(): Observable<Array<Lang>> {
    throw new Error('Unsupported operation.');
  }

  save(entity: Lang): Observable<DatabaseResultSet> {
    throw new Error('Unsupported operation.');
  }

}
