import { Observable } from 'rxjs';

import { DBConvertible } from './db-convertible';
import { DBManagementService } from './db-management.service';
import { TableMetadata } from "./table-metadata.model";
import { ObjectCreator } from '../shared/object-creator'
import { SQLQuery } from './sql-query.model';

export abstract class AbstractDAO<T extends DBConvertible> {

  constructor(
    protected db: DBManagementService,
    protected metadata: TableMetadata,
    protected creator: ObjectCreator<T>) {

  }

  abstract mapValues(entity: T): Array<any>;

  count(): Observable<number> {
    return this.db.count(this.metadata.name);
  }

  findAll(): Observable<Array<T>> {
    return this.db.all(this.metadata.name)
      .flatMap((data: any[]) => Observable.from(data))
      .flatMap((element: any) => Observable.of(this.creator.create().convertDB(element)))
      .toArray();
  }

  save(entity: T): Observable<T> {
    let query = SQLQuery.insertInto(this.metadata.name, this.metadata.order, this.mapValues(entity)); 
    return this.db.executeSQL(query);
  }

}