import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";
import { CommonModule } from '@angular/common';

import { LangModule } from '../lang/lang.module';
import { TranslateModule } from '@ngx-translate/core';
import { SettingsComponent } from "./settings.component";
import { SettingsService } from './shared/settings.service';
import { SettingsRepository } from './settings.repository';

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
    SettingsRepository
  ],
  exports: [
    SettingsComponent
  ]
})
export class SettingsModule { }
