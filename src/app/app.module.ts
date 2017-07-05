import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { HttpModule, Http } from '@angular/http';

// import { DBModule } from './db/db.module';
// import { TabsModule } from './tabs/tabs.module';
// import { SettingsModule } from './settings/settings.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';

// export function HttpLoaderFactory(http: Http) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

@NgModule({
  imports: [
    // TabsModule,
    // DBModule,
    // SettingsModule,
    BrowserModule,
    // HttpModule,
    IonicModule.forRoot(AppComponent)
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: (HttpLoaderFactory),
    //     deps: [Http]
    //   }
    // })
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
    AppService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }