import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { HomeComponent } from './home.component';

import { WordModule } from '../word/word.module';
import { TopicsModule } from '../topics/topics.module';
import { WordService } from '../word/shared/word.service';
import { TopicService } from '../topics/shared/topic.service';
import { AppService } from '../app.service';

@NgModule({
  imports: [
    WordModule,
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
