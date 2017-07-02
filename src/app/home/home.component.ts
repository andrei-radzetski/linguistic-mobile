import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { TabsComponent } from '../tabs/tabs.component'
import { WordEditorComponent } from '../words/word-editor/word-editor.component'
import { WordService } from '../words/shared/word.service';
import { TopicService } from '../topics/shared/topic.service';
import { AppService } from '../app.service';

@Component({
  selector: 'lgsc-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {

  topicsCount: number = 0;
  wordsCount: number = 0;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private wordService: WordService,
    private topicService: TopicService,
    appService: AppService) {

    appService.ready().subscribe(() => this.init());
  }

  init() {
    this.topicService.count()
      .flatMap((value: number) => {
        this.topicsCount = value;
        return this.wordService.count();
      }).subscribe((value: number) => {
        this.wordsCount = value;
      });
  }

  startLearning() {
    console.log('startLearning');
  }

  addWord() {
    let editor = this.modalCtrl.create(WordEditorComponent);
    editor.present();
  }

  openTopics() {
    this.navCtrl.parent.select(TabsComponent.TOPICS_TAB_INDEX);
  }

  openWords() {
    this.navCtrl.parent.select(TabsComponent.WORDS_TAB_INDEX);
  }

}
