import { Injectable } from '@angular/core';
import { AlertController, AlertOptions } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";

@Injectable()
export class AlertService {

  constructor(
    private alertController: AlertController,
    private translateService: TranslateService) {

  }

  error(message: string, handler?: (value: any) => boolean | void) {
    this.createErrorOptions(handler)
      .subscribe((options: AlertOptions) => {
        options.subTitle = message;
        this.alertController.create(options).present();
      });
  }

  private createErrorOptions(handler?: (value: any) => boolean | void): Observable<AlertOptions> {
    let options: AlertOptions = { buttons: [] };

    return this.translateService.get("app.error")
      .flatMap(value => {
        options.title = value;
        return this.translateService.get("button.ok");
      })
      .flatMap(value => {
        options.buttons.push({ text: value, handler: handler });
        return Observable.of(options);
      });
  }

}
