import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { Observable } from "rxjs";

import { Topic } from '../shared/topic.model';
import { TopicService } from '../shared/topic.service';
import { AbstractRefreshableComponent } from '../../shared/abstract-refreshable.component';
import { TopicEditorComponent } from '../topic-editor/topic-editor.component';
import { WordListComponent } from '../../word/word-list/word-list.component';

@Component({
  selector: 'lgsc-topic-list',
  templateUrl: 'topic-list.component.html'
})
export class TopicListComponent extends AbstractRefreshableComponent implements OnInit {

  private topics: Array<Topic>;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private topicService: TopicService,
    loadingController: LoadingController) {

    super(loadingController);
  }

  ngOnInit() {
    this.init();
  }

  load(): Observable<any> {
    return this.topicService.findAll()
      .flatMap((topics: Array<Topic>) => {
        this.topics = topics;
        return Observable.empty()
      })
  }

  openEditor(topic: Topic) {
    this.modalCtrl.create(TopicEditorComponent).present();
  }

  showWords(topic: Topic) {
    this.navCtrl.push(WordListComponent, {
      topic: topic
    });
  }

  remove(topic: Topic) {
    console.log('Remove topic');
  }

}
