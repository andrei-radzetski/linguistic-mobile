import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsComponent } from "./tabs/tabs.component";

@Component({
  selector: 'lnsc-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  rootPage: any = TabsComponent;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

