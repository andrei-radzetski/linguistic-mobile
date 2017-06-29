import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { WordListComponent } from './word-list/word-list.component';
import { WordEditorComponent } from './word-editor/word-editor.component';

import { WordService } from "./shared/word.service";

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(WordListComponent)
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
    WordService
  ],
  exports: [
    WordListComponent
  ]
})
export class WordsModule { }
