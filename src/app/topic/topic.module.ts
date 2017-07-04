import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { WordModule } from '../word/word.module';
import { AlertService } from '../shared/alert.service';
import { TopicService } from './shared/topic.service';
import { TopicRepository } from './topic.repository';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicEditorComponent } from './topic-editor/topic-editor.component';

@NgModule({
  imports: [
    WordModule,
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
    TopicService,
    TopicRepository,
    AlertService
  ],
  exports: [
    TopicListComponent
  ]
})
export class TopicModule { }
