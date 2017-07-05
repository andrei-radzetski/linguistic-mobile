import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { Observable } from 'rxjs';

import { TabsComponent } from './tabs/tabs.component';
// import { DBManagementService } from './db/db-management.service';
// import { SettingsService } from './settings/shared/settings.service';
// import { DBInitializationService } from './db/db-initialization.service';
// import { TranslateService } from '@ngx-translate/core';
import { AppService } from "./app.service";

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
    // dbManagementService: DBManagementService,
    // dbInitializationService: DBInitializationService,
    // translateService: TranslateService,
    // settingsService: SettingsService
    ) {

      platform.ready()
      .then(() => this.onApplicationReady())
      .catch((e) => this.onApplicationError(e));

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
