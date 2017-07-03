import { Injectable } from '@angular/core';
import { AlertController, AlertOptions, Alert } from 'ionic-angular';

@Injectable()
export class AlertService {

  private defaultAlertConfig: AlertOptions = {
    buttons: ['Ok']
  }

  private errorAlertConfig: AlertOptions = {
    buttons: this.defaultAlertConfig.buttons,
    title: 'Error'
  }

  constructor(private alertCtrl: AlertController) { }

  error(message: string): Promise<any> {
    let alert = this.alertCtrl.create(this.errorAlertConfig);
    alert.setSubTitle(message);
    return alert.present();
  }

}
