import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { HomeComponent } from './home.component';

import { WordsModule } from '../words/words.module';
import { TopicsModule } from '../topics/topics.module';
import { WordService } from '../words/shared/word.service';
import { TopicService } from '../topics/shared/topic.service';
import { AppService } from '../app.service';

@NgModule({
  imports: [
    WordsModule,
    TopicsModule,
    IonicModule
  ],
  declarations: [
    HomeComponent
  ],
  entryComponents: [
    HomeComponent
  ],
  providers: [
    WordService,
    TopicService,
    AppService
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
