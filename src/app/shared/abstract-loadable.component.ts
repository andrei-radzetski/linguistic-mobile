import { Loadable } from "./loadable";
import { Observable } from "rxjs";
import { LoadingController, Loading, Refresher } from 'ionic-angular';

export abstract class AbstractLoadableComponent implements Loadable {
  
  protected loading: Loading;

  constructor(loadingController: LoadingController) {
    this.loading = loadingController.create();
  }

  abstract load(): Observable<any>;

  init() {
    this.loading.present();
    this.load().subscribe(
      () => {}, 
      () => this.loading.dismiss(),
      () => this.loading.dismiss())
  }

  refresh(refresher: Refresher) {
    this.loading.present();
    this.load().subscribe(
      () => {}, 
      () => refresher.complete(),
      () => refresher.complete())
  }

}