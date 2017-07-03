import { Refresher } from 'ionic-angular';
import { Observable } from "rxjs";

/**
 * Refreshable interface. Implements if component must be refreshed manually by swipe down.
 */
export interface Refreshable {

  /**
   * Calls when component was created.
   */
  init();

  /**
   * Loading data method.
   */
  load(): Observable<any>;

  /**
   * Calls when user swipes down. 
   */
  refresh(refresher: Refresher);

}