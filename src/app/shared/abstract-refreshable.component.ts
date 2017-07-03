import { Refreshable } from "./refreshable";
import { Observable } from "rxjs";
import { LoadingController, Loading, Refresher } from 'ionic-angular';

/**
 * Abstract refreshable component. Extends if component must be refreshed manually by swipe down.
 */
export abstract class AbstractRefreshableComponent implements Refreshable {

  protected loading: Loading;

  constructor(loadingController: LoadingController) {
    this.loading = loadingController.create();
  }

  /**
   * Loading data method.
   */
  abstract load(): Observable<any>;

  /**
   * Calls when component was created.
   * Show loading and dismiss after {@link AbstractRefreshableComponent#load()} method was finished.
   */
  init() {
    this.loading.present();
    this.load().subscribe(
      () => { },
      () => this.loading.dismiss(),
      () => this.loading.dismiss())
  }

  /**
   * Calls when user swipes down. 
   * Show refresher and dismiss after {@link AbstractRefreshableComponent#load()} method was finished.
   */
  refresh(refresher: Refresher) {
    this.loading.present();
    this.load().subscribe(
      () => { },
      () => refresher.complete(),
      () => refresher.complete())
  }

}