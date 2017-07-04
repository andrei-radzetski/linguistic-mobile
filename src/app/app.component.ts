import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsComponent } from './tabs/tabs.component';

import { DBManagementService } from './db/db-management.service';
import { DBInitializationService } from './db/db-initialization.service';
import { AppService } from "./app.service";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lnsc-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  root: any = TabsComponent;

  constructor(
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private appService: AppService,
    platform: Platform,
    dbManagementService: DBManagementService,
    dbInitializationService: DBInitializationService,
    translateService: TranslateService) {

    translateService.setDefaultLang('ru');

    platform.ready()
      .then(() => dbManagementService.open()
        .concat(dbInitializationService.initialize())
        .subscribe(
        () => {},
        e => this.onApplicationError(e),
        () => this.onApplicationReady()))
      .catch(e => this.onApplicationError(e));
  }

  private onApplicationError(e: any) {
    console.log('Application initialization error.');
    console.log(e);
  }

  private onApplicationReady() {
    console.log('Application initialization complete.');
    this.statusBar.styleDefault();
    this.splashScreen.hide();
    this.appService.emit();
  }

}
