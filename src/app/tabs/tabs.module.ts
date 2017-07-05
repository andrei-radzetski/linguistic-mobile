import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from "@ngx-translate/core";

import { TabsComponent } from './tabs.component';
import { HomeModule } from "../home/home.module";

@NgModule({
  imports: [
    IonicModule,
    TranslateModule.forChild(),
    HomeModule
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
