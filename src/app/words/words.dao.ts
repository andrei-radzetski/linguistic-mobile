import { Injectable } from '@angular/core';

import { AbstractDAO } from '../db/abstract.dao';
import { Word } from './shared/word.model';
import { DBManagementService } from '../db/db-management.service';

@Injectable()
export class WordDAO extends AbstractDAO<Word> {

  constructor(db: DBManagementService) {
    super(db, Word.METADATA, { create: (): Word => new Word() });
  }

  mapValues(entity: Word): Array<string> {
    return [
      entity.value
    ];
  }
}
