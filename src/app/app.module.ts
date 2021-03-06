import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { TabsModule } from './tabs/tabs.module';
import { DatabaseModule } from './database/database.module';
import { AlertService } from './shared/dialog/alert.service';
import { ConfirmService } from './shared/dialog/confirm.service';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent),
    TranslateModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [Http]
      }
    }),
    TabsModule,
    DatabaseModule
  ],
  declarations: [
    AppComponent
  ],
  entryComponents: [
    AppComponent
  ],
  bootstrap: [
    IonicApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppService,
    AlertService,
    ConfirmService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }