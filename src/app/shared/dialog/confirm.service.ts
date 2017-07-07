import { Injectable } from '@angular/core';
import { AlertController, AlertOptions } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";

@Injectable()
export class ConfirmService {

  constructor(
    private alertController: AlertController,
    private translateService: TranslateService) {

  }

  confirm(message: string,
    okHandler?: (value: any) => boolean | void,
    cancelHandler?: (value: any) => boolean | void) {

    this.createErrorOptions(okHandler, cancelHandler)
      .subscribe((options: AlertOptions) => {
        options.subTitle = message;
        this.alertController.create(options).present();
      });
  }

  private createErrorOptions(
    okHandler?: (value: any) => boolean | void,
    cancelHandler?: (value: any) => boolean | void): Observable<AlertOptions> {

    let options: AlertOptions = { buttons: [] };

    return this.translateService.get("button.cancel")
      .flatMap(value => {
        options.buttons.push({ role: "cancel", text: value, handler: cancelHandler });
        return this.translateService.get("button.ok");
      })
      .flatMap(value => {
        options.buttons.push({ text: value, handler: okHandler });
        return Observable.of(options);
      });
  }

}
