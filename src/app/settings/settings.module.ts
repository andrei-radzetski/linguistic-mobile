import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";
import { CommonModule } from '@angular/common';

import { SettingsComponent } from "./settings.component";
import { TranslateModule } from '@ngx-translate/core';
import { LangModule } from '../lang/lang.module';

@NgModule({
  imports: [
    LangModule,
    CommonModule,
    IonicModule,
    TranslateModule.forChild()
  ],
  declarations: [
    SettingsComponent
  ],
  entryComponents: [
    SettingsComponent
  ],
  exports: [
    SettingsComponent
  ]
})
export class SettingsModule { }
