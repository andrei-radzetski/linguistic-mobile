import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from "@ngx-translate/core";

import { HomeComponent } from './home.component'
import { WordModule } from "../word/word.module";

@NgModule({
  imports: [
    IonicModule,
    TranslateModule.forChild(),
    WordModule
  ],
  declarations: [
    HomeComponent
  ],
  entryComponents: [
    HomeComponent
  ]
})
export class HomeModule { }
