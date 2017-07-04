import { Injectable } from '@angular/core';

import { Word } from './shared/word.model';
import { AbstractRepository } from '../repository/abstract.repository';
import { DBManagementService } from '../db/db-management.service';

@Injectable()
export class WordRepository extends AbstractRepository<Word> {

  constructor(db: DBManagementService) {
    super(db, Word.METADATA, { create: (): Word => new Word() });
  }

  mapValues(entity: Word): Array<string> {
    return [
      entity.value
    ];
  }
}
