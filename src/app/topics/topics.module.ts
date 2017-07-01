import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { WordsModule } from '../words/words.module';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicEditorComponent } from './topic-editor/topic-editor.component';

import { TopicService } from './shared/topic.service';

@NgModule({
  imports: [
    WordsModule,
    CommonModule,
    IonicModule
  ],
  declarations: [
    TopicListComponent,
    TopicEditorComponent
  ],
  entryComponents: [
    TopicListComponent,
    TopicEditorComponent
  ],
  providers: [
    TopicService
  ],
  exports: [
    TopicListComponent
  ]
})
export class TopicsModule { }
