import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AppComponent } from './app.component';

import { TabsModule } from './tabs/tabs.module';
import { DBModule } from './db/db.module';

import { DBManagementService } from './db/db-management.service';
import { DBInitializationService } from './db/db-initialization.service';

@NgModule({
  imports: [
    TabsModule,
    DBModule,
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
    DBManagementService,
    DBInitializationService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
