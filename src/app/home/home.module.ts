import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { HomeComponent } from './home.component';

import { WordsModule } from '../words/words.module';

@NgModule({
  imports: [
    WordsModule,
    IonicModule
  ],
  declarations: [
    HomeComponent
  ],
  entryComponents: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
