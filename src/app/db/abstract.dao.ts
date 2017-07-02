import { Observable } from 'rxjs';

import { DBConvertible } from './db-convertible';
import { DBManagementService } from './db-management.service';
import { TableMetadata } from "./table-metadata.model";
import { ObjectCreator } from '../shared/object-creator'

export abstract class AbstractDAO<T extends DBConvertible> {

  constructor(
    protected db: DBManagementService,
    protected metadata: TableMetadata,
    private creator: ObjectCreator<T>) {

  }

  count(): Observable<number> {
    return this.db.count(this.metadata.name);
  }

  findAll(): Observable<Array<T>> {
    return this.db.all(this.metadata.name)
      .flatMap((raw: any) => Observable.of(this.creator.create().convertDB(raw)))
      .toArray();
  }

}