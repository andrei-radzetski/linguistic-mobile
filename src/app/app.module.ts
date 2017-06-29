import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AppComponent } from './app.component';
import { HomeModule } from "./home/home.module";

@NgModule({
  imports: [
    HomeModule,
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
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
