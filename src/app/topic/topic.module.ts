import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicEditorComponent } from "./topic-editor/topic-editor.component"
import { TopicRepository } from "./topic.repository"
import { TopicService } from "./shared/topic.service"

@NgModule({
  imports: [
    IonicModule,
    TranslateModule.forChild()
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
    TopicRepository,
    TopicService
  ]
})
export class TopicModule { }
