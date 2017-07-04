import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { TabsComponent } from './tabs.component';
import { HomeModule } from '../home/home.module';
import { TopicsModule } from '../topics/topics.module';
import { WordModule } from '../word/word.module';
import { SettingsModule } from '../settings/settings.module';

@NgModule({
  imports: [
    HomeModule,
    TopicsModule,
    WordModule,
    SettingsModule,
    IonicModule
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
