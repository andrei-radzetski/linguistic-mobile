import { Observable } from "rxjs";

import { DatabaseNativeResultSet } from "./native/database-native-result-set"
import { DatabaseNativeRows } from "./native/database-native-rows"

export class DatabaseResultSet implements DatabaseNativeResultSet {

  constructor(private native: DatabaseNativeResultSet) { }

  get rows(): DatabaseNativeRows {
    return this.native.rows;
  }

  get rowsAffected(): number {
    return this.native.rowsAffected;
  }

  get insertId(): number {
    return this.native.insertId;
  }

  get(): Observable<any> {
    return Observable
      .range(0, this.native.rows.length)
      .flatMap((index: number) => Observable.of(this.rows.item(index)));
  }

}
