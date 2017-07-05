import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Database } from "./database";

/**
 * Mock database implementation.
 * Use database service instead of.
 * 
 * @hidden
 */
@Injectable()
export class DatabaseMock implements Database {

  open(): Observable<any> {
    console.log('Mock database was opened successful.');
    return Observable.empty();
  }

}
