import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AppComponent } from './app.component';

import { TabsModule } from './tabs/tabs.module';
import { DbModule } from './db/db.module';

import { DbService } from './db/db.service';
import { DbInitializationService } from './db/db-initialization.service';

@NgModule({
  imports: [
    TabsModule,
    DbModule,
    BrowserModule,
    IonicModule.forRoot(AppComponent),
  ],
  declarations: [
    AppComponent
  ],
  entryComponents: [
    AppComponent
  ],
  bootstrap: [IonicApp],
  providers: [
    StatusBar,
    SplashScreen,
    DbService,
    DbInitializationService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
