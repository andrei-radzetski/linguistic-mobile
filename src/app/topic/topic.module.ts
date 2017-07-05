import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { TopicListComponent } from './topic-list/topic-list.component';

@NgModule({
  imports: [
    IonicModule,
    TranslateModule.forChild()
  ],
  declarations: [
    TopicListComponent
  ],
  entryComponents: [
    TopicListComponent
  ]
})
export class TopicModule { }
