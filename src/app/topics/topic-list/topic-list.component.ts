import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { Observable } from "rxjs";

import { AbstractLoadableComponent } from '../../shared/abstract-loadable.component';
import { TopicEditorComponent } from '../topic-editor/topic-editor.component';
import { WordListComponent } from '../../words/word-list/word-list.component';

import { Topic } from '../shared/topic.model';
import { TopicService } from '../shared/topic.service';

@Component({
  selector: 'lgsc-topic-list',
  templateUrl: 'topic-list.component.html'
})
export class TopicListComponent extends AbstractLoadableComponent implements OnInit {

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

  openEditor() {
    let editor = this.modalCtrl.create(TopicEditorComponent);
    editor.present();
  }

  seeWords(topic: Topic) {
    this.navCtrl.push(WordListComponent, {
      topic: topic
    });
  }

}
