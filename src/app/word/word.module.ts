import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { WordListComponent } from './word-list/word-list.component';
import { WordEditorComponent } from './word-editor/word-editor.component';
import { WordRepository } from "./word.repository"
import { WordService } from "./shared/word.service"

@NgModule({
  imports: [
    IonicModule,
    TranslateModule.forChild()
  ],
  declarations: [
    WordListComponent,
    WordEditorComponent
  ],
  entryComponents: [
    WordListComponent,
    WordEditorComponent
  ], 
  providers: [
    WordRepository,
    WordService
  ]
})
export class WordModule { }
