import { ViewController, NavParams } from 'ionic-angular';

import { ObjectCreator } from '../object-creator';

/**
 * Abstract object editor.
 * 
 * @param <T> Type of a editing object.
 */
export abstract class AbstractEditorComponent<T> {

  public static readonly CANCEL_EVENT_ID = "cancel";

  public static readonly DONE_EVENT_ID = "done";

  protected object: T;

  constructor(
    protected viewCtrl: ViewController,
    protected params: NavParams,
    creator: ObjectCreator<T>) {

    this.object = creator.create();
  }

  /**
   * Cancel the current dialog. Calls dismiss with {@link AbstractEditorComponent#CANCEL_EVENT_ID}.
   */
  protected cancel() {
    this.viewCtrl.dismiss(null, AbstractEditorComponent.CANCEL_EVENT_ID);
  }

  /**
   * Done the current dialog. Validates and calls dismiss with {@link AbstractEditorComponent#DONE_EVENT_ID}.
   */
  protected done() {
    if (this.validate()) {
      this.viewCtrl.dismiss(this.object, AbstractEditorComponent.DONE_EVENT_ID);
    }
  }

  /**
   * Validate object after done was called.
   */
  protected validate(): boolean {
    return true;
  }

}
