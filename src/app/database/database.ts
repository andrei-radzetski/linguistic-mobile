import { Observable } from 'rxjs';

/**
 * Database interface. Provides commons database methods.
 */
export interface Database {

  open(): Observable<any>;

}