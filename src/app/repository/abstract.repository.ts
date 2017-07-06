import { Observable } from 'rxjs';

import { SQLQuery } from '../sql/sql.query.model';
import { SQLQueryBuilder } from '../sql/sql.query-builder';
import { ObjectCreator } from '../shared/object-creator'
import { DatabaseService } from '../database/database.service';
import { DatabaseResultSet } from "../database/database-result-set.model";
import { DatabaseNativeResultSet } from "../database/database-native.model";
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
  protected db: DatabaseService;

  /**
   * Entity table metadata.
   */
  protected metadata: SQLTableMetadata;

  /**
   * Entity creator. Helps to create new instance of entity.
   */
  protected creator: ObjectCreator<T>;

  constructor(db: DatabaseService, metadata: SQLTableMetadata, creator: ObjectCreator<T>) {
    this.db = db;
    this.metadata = metadata;
    this.creator = creator;
  }
  /**
   * Map values before save to repository.
   * 
   * @param {T} entity Current object.
   */
  protected mapValues(entity: T): Array<any> {
    throw new Error('Unsupported operation.');
  }

  count(): Observable<number> {
    return this.db.count(this.metadata.name);
  }

  findAll(): Observable<Array<T>> {
    let sql = new SQLQueryBuilder(this.metadata.name).select(SQLQuery.ALL_OPERATOR).build();

    return this.db.executeSQL(sql)
      .flatMap((res: DatabaseResultSet) => res.get())
      .flatMap((element: any) => Observable.of(this.creator.create().convertFromRepository(element)))
      .toArray();
  }

  save(entity: T): Observable<DatabaseNativeResultSet> {
    let builder = new SQLQueryBuilder(this.metadata.name).insertInto(this.metadata.order);
    return this.db.executeSQL(builder.build(this.mapValues(entity)));
  }

  delete(id: number): Observable<DatabaseNativeResultSet> {
    let builder = new SQLQueryBuilder(this.metadata.name).delete().where(`id = ${id}`);
    return this.db.executeSQL(builder.build());
  }

}
