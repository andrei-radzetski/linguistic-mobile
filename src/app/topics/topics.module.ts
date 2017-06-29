import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { TopicListComponent } from './topic-list/topic-list.component';

@NgModule({
  imports: [
    IonicModule.forRoot(TopicListComponent)
  ],
  declarations: [
    TopicListComponent
  ],
  entryComponents: [
    TopicListComponent
  ],
  exports: [
    TopicListComponent
  ]
})
export class TopicsModule { }
