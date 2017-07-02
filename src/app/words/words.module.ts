import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { WordListComponent } from './word-list/word-list.component';
import { WordEditorComponent } from './word-editor/word-editor.component';
import { WordViewerComponent } from './word-viewer/word-viewer.component';

import { WordService } from './shared/word.service';
import { WordDAO } from './words.dao';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    WordListComponent,
    WordEditorComponent,
    WordViewerComponent
  ],
  entryComponents: [
    WordListComponent,
    WordEditorComponent,
    WordViewerComponent
  ],
  providers: [
    WordService,
    WordDAO
  ],
  exports: [
    WordListComponent
  ]
})
export class WordsModule { }
