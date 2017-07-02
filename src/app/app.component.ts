import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsComponent } from './tabs/tabs.component';

import { DBManagementService } from './db/db-management.service';
import { DBInitializationService } from './db/db-initialization.service';

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
    dbManagementService: DBManagementService, 
    dbInitializationService: DBInitializationService) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      
      dbManagementService.open().subscribe(() => {
        dbInitializationService.initialize();
      });
    });
  }
}
