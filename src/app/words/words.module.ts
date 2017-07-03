import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { WordListComponent } from './word-list/word-list.component';
import { WordEditorComponent } from './word-editor/word-editor.component';
import { WordViewerComponent } from './word-viewer/word-viewer.component';

import { LangModule } from "../lang/lang.module";
import { WordService } from './shared/word.service';
import { WordDAO } from './words.dao';
import { AlertService } from '../shared/alert.service';

@NgModule({
  imports: [
    CommonModule,
    LangModule,
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
    WordDAO,
    AlertService
  ],
  exports: [
    WordListComponent
  ]
})
export class WordsModule { }
