import { Refresher } from 'ionic-angular';
import { Observable } from "rxjs";

export interface Loadable {

  init();

  load(): Observable<any>;

  refresh(refresher: Refresher);

}