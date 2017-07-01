import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsComponent } from './tabs/tabs.component';
import { DbService } from './db/db.service';
import { DbInitializationService } from './db/db-initialization.service';

@Component({
  selector: 'lnsc-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  root: any = TabsComponent;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    dbService: DbService, 
    dbInitializationService: DbInitializationService) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      
      dbService.open().subscribe(() => {
        dbInitializationService.initialize();
      });
    });
  }
}
