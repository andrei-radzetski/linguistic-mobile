import { NgModule } from "@angular/core";
import { IonicModule } from 'ionic-angular';

import { TabsComponent } from "./tabs.component";
import { HomeModule } from "../home/home.module";
import { SettingsModule } from "../settings/settings.module";

@NgModule({
  imports: [
    HomeModule,
    SettingsModule,
    IonicModule.forRoot(TabsComponent)
  ],
  declarations: [
    TabsComponent
  ],
  entryComponents: [
    TabsComponent
  ],
  exports: [
    TabsComponent
  ]
})
export class TabsModule {

}