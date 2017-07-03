import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { LangService } from './shared/lang.service';
import { LangDAO } from './lang.dao';

@NgModule({
  imports: [
    IonicModule
  ],
  providers: [
    LangService,
    LangDAO
  ]
})
export class LangModule { }
