import { Observable } from 'rxjs';

import { SQLQueryBuilder } from '../sql/sql.query-builder';
import { ObjectCreator } from '../shared/object-creator'
import { DBManagementService } from '../db/db-management.service';
import { RepositoryConvertible } from './repository-convertible';
import { SQLTableMetadata } from "../sql/sql.table-metadata.model";

/**
 * Abstract repository. Gets access to abstract storage data for specified type.
 * There are common methods.
 */
export abstract class AbstractRepository<T extends RepositoryConvertible> {

  /**
   * Database instance.
   */
  protected db: DBManagementService;

  /**
   * Entity table metadata.
   */
  protected metadata: SQLTableMetadata;

  /**
   * Entity creator. Helps to create new instance of entity.
   */
  protected creator: ObjectCreator<T>;

  constructor(db: DBManagementService, metadata: SQLTableMetadata, creator: ObjectCreator<T>) {
    this.db = db;
    this.metadata = metadata;
    this.creator = creator;
  }
  /**
   * Map values before save to repository.
   * 
   * @param {T} entity Current object.
   */
  abstract mapValues(entity: T): Array<any>;

  count(): Observable<number> {
    return this.db.count(this.metadata.name);
  }

  findAll(): Observable<Array<T>> {
    return this.db.all(this.metadata.name)
      .flatMap((data: any[]) => Observable.from(data))
      .flatMap((element: any) => Observable.of(this.creator.create().convertFromRepository(element)))
      .toArray();
  }

  save(entity: T): Observable<T> {
    let builder = new SQLQueryBuilder(this.metadata.name).insertInto(this.metadata.order);
    return this.db.executeSQL(builder.build(this.mapValues(entity)));
  }

}
