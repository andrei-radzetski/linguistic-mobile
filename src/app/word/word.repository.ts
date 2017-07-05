import { Injectable } from '@angular/core';

import { Word } from './shared/word.model';
import { AbstractRepository } from '../repository/abstract.repository';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class WordRepository extends AbstractRepository<Word> {

  constructor(db: DatabaseService) {
    super(db, Word.METADATA, { create: (): Word => new Word() });
  }

  mapValues(entity: Word): Array<string> {
    return [
      entity.value
    ];
  }
}
