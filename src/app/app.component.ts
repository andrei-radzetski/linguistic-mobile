import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsComponent } from './tabs/tabs.component';
import { AppService } from "./app.service";
import { TranslateService } from '@ngx-translate/core';

import { DatabaseService } from "./database/database.service";

@Component({
  selector: 'lnsc-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  root: any = TabsComponent;

  constructor(
    platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private appService: AppService,
    private translateService: TranslateService,
    private databaseService: DatabaseService) {

    platform.ready()
      .then(() => this.ready())
      .catch((e) => this.error(e));
  }

  private ready() {
    this.databaseService.open().subscribe(
      () => { },
      e => this.error(e),
      () => {
        console.log('Application initialization complete.');
        this.translateService.setDefaultLang('en');
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        this.appService.emit();
      });
  }

  private error(e: any) {
    console.log('Application initialization error.');
    console.log(e);
  }

  // platform.ready()
    //   .then(() => dbManagementService.open()
    //     .concat(dbInitializationService.initialize())
    //     .concat(settingsService.getCurrentLangKey().flatMap((value: string) => {
    //       translateService.setDefaultLang(value);
    //       return Observable.empty();
    //     }))
    //     .subscribe(
    //     () => { },
    //     e => this.onApplicationError(e),
    //     () => this.onApplicationReady()))
    //   .catch(e => this.onApplicationError(e));

}
