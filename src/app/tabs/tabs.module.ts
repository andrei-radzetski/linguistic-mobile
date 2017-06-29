import { NgModule } from "@angular/core";
import { IonicModule } from 'ionic-angular';

import { TabsComponent } from "./tabs.component";
import { HomeModule } from "../home/home.module";
import { SearchModule } from "../search/search.module";
import { TopicsModule } from "../topics/topics.module";
import { SettingsModule } from "../settings/settings.module";

@NgModule({
  imports: [
    HomeModule,
    SearchModule,
    TopicsModule,
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
export class TabsModule { }
