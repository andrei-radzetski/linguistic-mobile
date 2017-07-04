import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";
import { CommonModule } from '@angular/common';

import { SettingsComponent } from "./settings.component";
import { TranslateModule } from '@ngx-translate/core';
import { LangModule } from '../lang/lang.module';
import { SettingsService } from './shared/settings.service';
import { SettingsDAO } from './settings.dao';

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
  providers: [
    SettingsService,
    SettingsDAO
  ],
  exports: [
    SettingsComponent
  ]
})
export class SettingsModule { }
