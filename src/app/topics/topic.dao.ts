import { Injectable } from '@angular/core';

import { AbstractDAO } from '../db/abstract.dao';
import { Topic } from './shared/topic.model';
import { DBManagementService } from '../db/db-management.service';

@Injectable()
export class TopicDAO extends AbstractDAO<Topic> {

  constructor(db: DBManagementService) {
    super(db, Topic.METADATA, { create: (): Topic => new Topic() });
  }

}
