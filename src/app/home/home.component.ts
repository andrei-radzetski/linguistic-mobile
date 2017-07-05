import { Component } from '@angular/core';
// import { NavController, ModalController, LoadingController } from 'ionic-angular';
// import { Observable } from "rxjs";

import { AppService } from '../app.service';
// import { TabsComponent } from '../tabs/tabs.component'
// import { AbstractRefreshableComponent } from '../shared/abstract-refreshable.component';
// import { WordEditorComponent } from '../word/word-editor/word-editor.component'
// import { TopicService } from '../topic/shared/topic.service';
// import { WordService } from '../word/shared/word.service';

@Component({
  selector: 'lgsc-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent /*extends AbstractRefreshableComponent*/ {

  constructor(
    appService: AppService
    // private navCtrl: NavController,
    // private modalCtrl: ModalController,
    // private wordService: WordService,
    // private topicService: TopicService,
    // loadingController: LoadingController,
    ) {
    appService.ready().subscribe(() => console.log('HomeComponent'));
    // super(loadingController);
    // appService.ready().subscribe(() => this.init());
    // this.topicsCount = 0;
    // this.wordsCount = 0;
  }

  // load(): Observable<any> {
  //   return this.topicService.count()
  //     .flatMap((value: number) => {
  //       this.topicsCount = value;
  //       return this.wordService.count();
  //     }).flatMap((value: number) => {
  //       this.wordsCount = value;
  //       return Observable.empty();
  //     });
  // }

  // startLearning() {
  //   console.log('startLearning');
  // }

  // addWord() {
  //   let editor = this.modalCtrl.create(WordEditorComponent);
  //   editor.present();
  // }

  // openTopics() {
  //   this.navCtrl.parent.select(TabsComponent.TOPICS_TAB_INDEX);
  // }

  // openWords() {
  //   this.navCtrl.parent.select(TabsComponent.WORDS_TAB_INDEX);
  // }

}
