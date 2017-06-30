import { NgModule } from "@angular/core";
import { IonicModule } from 'ionic-angular';

import { TabsComponent } from "./tabs.component";
import { HomeModule } from "../home/home.module";
import { TopicsModule } from "../topics/topics.module";
import { WordsModule } from "../words/words.module";
import { SettingsModule } from "../settings/settings.module";

@NgModule({
  imports: [
    HomeModule,
    TopicsModule,
    WordsModule,
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
