import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { Observable } from "rxjs";

import { AbstractRefreshableComponent } from '../shared/abstract-refreshable.component';
import { TabsComponent } from '../tabs/tabs.component'
import { WordEditorComponent } from '../word/word-editor/word-editor.component'
import { WordService } from '../word/shared/word.service';
import { TopicService } from '../topics/shared/topic.service';
import { AppService } from '../app.service';

@Component({
  selector: 'lgsc-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent extends AbstractRefreshableComponent {

  topicsCount: number = 0;
  wordsCount: number = 0;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private wordService: WordService,
    private topicService: TopicService,
    loadingController: LoadingController,
    appService: AppService) {

    super(loadingController);
    appService.ready().subscribe(() => this.init());
  }

  load(): Observable<any> {
    return this.topicService.count()
      .flatMap((value: number) => {
        this.topicsCount = value;
        return this.wordService.count();
      }).flatMap((value: number) => {
        this.wordsCount = value;
        return Observable.empty();
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
