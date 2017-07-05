import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from "@ngx-translate/core";

import { TabsComponent } from './tabs.component';
import { HomeModule } from '../home/home.module';
import { WordModule } from '../word/word.module';
import { TopicModule } from '../topic/topic.module';

@NgModule({
  imports: [
    IonicModule,
    TranslateModule.forChild(),
    HomeModule,
    WordModule,
    TopicModule
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
