import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { WordListComponent } from './word-list/word-list.component';

@NgModule({
  imports: [
    IonicModule,
    TranslateModule.forChild()
  ],
  declarations: [
    WordListComponent
  ],
  entryComponents: [
    WordListComponent
  ],
  exports: [
    WordListComponent
  ]
})
export class WordModule { }
