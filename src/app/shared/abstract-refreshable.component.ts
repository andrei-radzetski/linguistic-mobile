import { Observable } from "rxjs";
import { LoadingController, Refresher } from 'ionic-angular';

/**
 * Abstract refreshable component. Extends if component must be refreshed manually by swipe down.
 */
export abstract class AbstractRefreshableComponent {

  constructor(protected loadingController: LoadingController) { }

  /**
   * Loading data method.
   */
  abstract load(): Observable<any>;

  /**
   * Calls when component was created.
   * Show loading and dismiss after {@link AbstractRefreshableComponent#load()} method was finished.
   */
  initialize() {
    let loading = this.loadingController.create();
    loading.present();
    this.load().subscribe(
      () => { },
      (err) => {
        console.log("Loading error:");
        console.log(err);
        loading.dismiss();
      },
      () => loading.dismiss())
  }

  /**
   * Calls when user swipes down. 
   * Show refresher and dismiss after {@link AbstractRefreshableComponent#load()} method was finished.
   */
  refresh(refresher: Refresher) {
    this.load().subscribe(
      () => { },
      (err) => {
        console.log("Refreshing error:");
        console.log(err);
        refresher.complete();
      },
      () => refresher.complete());
  }

}
