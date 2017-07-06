import { Observable, Observer } from "rxjs";

import { DatabaseRows } from "./database-rows";

/**
 * Examples:
 * 
 * INSERT - {"rows":{"length":0},"rowsAffected":1,"insertId":1}
 * SELECT - {"rows":{"length":1},"rowsAffected":0}
 * UPDATE - {"rows":{"length":0},"rowsAffected":1,"insertId":1}
 */
export class DatabaseResult {

  rows: DatabaseRows;

  rowsAffected: number;

  insertId: number;

  get(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      if (this.rows.length > 0) {
        Observable.range(0, this.rows.length)
          .flatMap((index: number) => Observable.of(this.rows.item(index)))
          .subscribe(
          element => observer.next(element),
          err => observer.error(err),
          () => observer.complete());
      } else {
        observer.next(null);
        observer.complete();
      }
    });
  }

}
