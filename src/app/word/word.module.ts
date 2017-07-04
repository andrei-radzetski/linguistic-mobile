import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { LangModule } from "../lang/lang.module";
import { WordService } from './shared/word.service';
import { AlertService } from '../shared/alert.service';
import { WordRepository } from './word.repository';
import { WordListComponent } from './word-list/word-list.component';
import { WordEditorComponent } from './word-editor/word-editor.component';
import { WordViewerComponent } from './word-viewer/word-viewer.component';

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
    WordRepository,
    AlertService
  ],
  exports: [
    WordListComponent
  ]
})
export class WordModule { }
