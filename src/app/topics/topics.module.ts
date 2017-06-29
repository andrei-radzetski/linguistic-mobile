import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { WordsModule } from "../words/words.module";
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicEditorComponent } from "./topic-editor/topic-editor.component";

@NgModule({
  imports: [
    WordsModule,
    IonicModule.forRoot(TopicListComponent)
  ],
  declarations: [
    TopicListComponent,
    TopicEditorComponent
  ],
  entryComponents: [
    TopicListComponent,
    TopicEditorComponent
  ],
  exports: [
    TopicListComponent
  ]
})
export class TopicsModule { }
