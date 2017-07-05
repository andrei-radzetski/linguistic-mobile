import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from "@ngx-translate/core";

import { TabsComponent } from './tabs.component';
import { HomeModule } from '../home/home.module';
import { WordModule } from '../word/word.module';

@NgModule({
  imports: [
    IonicModule,
    TranslateModule.forChild(),
    HomeModule,
    WordModule
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
