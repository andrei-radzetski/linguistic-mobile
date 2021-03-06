import { Injectable } from '@angular/core';

import { Topic } from './shared/topic.model';
import { AbstractRepository } from '../repository/abstract.repository';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class TopicRepository extends AbstractRepository<Topic> {

  constructor(db: DatabaseService) {
    super(db, Topic.METADATA, { create: (): Topic => new Topic() });
  }

  mapValues(entity: Topic): Array<string> {
    return [
      entity.name,
      entity.comment
    ];
  }

}
