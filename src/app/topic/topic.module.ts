import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicEditorComponent } from "./topic-editor/topic-editor.component"
import { TopicViewerComponent } from "./topic-viewer/topic-viewer.component"
import { TopicRepository } from "./topic.repository"
import { TopicService } from "./shared/topic.service"

@NgModule({
  imports: [
    IonicModule,
    TranslateModule.forChild()
  ],
  declarations: [
    TopicListComponent,
    TopicEditorComponent,
    TopicViewerComponent
  ],
  entryComponents: [
    TopicListComponent,
    TopicEditorComponent,
    TopicViewerComponent
  ],
  providers: [
    TopicRepository,
    TopicService
  ]
})
export class TopicModule { }
