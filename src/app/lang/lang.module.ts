import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { LangService } from './shared/lang.service';
import { LangRepository } from './lang.repository';

@NgModule({
  imports: [
    IonicModule
  ],
  providers: [
    LangService,
    LangRepository
  ]
})
export class LangModule { }
