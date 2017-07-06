import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, ItemSliding } from 'ionic-angular';
import { Observable } from "rxjs";

import { TopicEditorComponent } from '../topic-editor/topic-editor.component';
import { TopicViewerComponent } from '../topic-viewer/topic-viewer.component';
import { AbstractRefreshableComponent } from "../../shared/abstract-refreshable.component"
import { Topic } from "../shared/topic.model"
import { TopicService } from "../shared/topic.service"

@Component({
  selector: 'lgsc-topic-list',
  templateUrl: 'topic-list.component.html'
})
export class TopicListComponent extends AbstractRefreshableComponent implements OnInit {

  topics: Topic[];

  constructor(
    loadingController: LoadingController,
    private modalController: ModalController,
    private topicService: TopicService) {
    
    super(loadingController);
    this.topics = [];
  }

  load(): Observable<any> {
    return this.topicService.findAll()
      .flatMap((values: Topic[]) => {
        this.topics = values
        return Observable.empty();
      });
  }

  ngOnInit() {
    this.initialize();
  }

  add() {
    console.log('TopicListComponent -> Add Event.');
    this.modalController.create(TopicEditorComponent).present();
  }

  view(topic: Topic) {
    console.log('TopicListComponent -> View Event.');
  }

  detail(item: ItemSliding, topic: Topic) {
    console.log('TopicListComponent -> Detail Event.');
    item.close();
    this.modalController.create(TopicViewerComponent, { data: topic }).present();
  }

  edit(item: ItemSliding, topic: Topic) {
    console.log('TopicListComponent -> Edit Event.');
    item.close();
    this.modalController.create(TopicEditorComponent).present();
  }

  remove(item: ItemSliding, topic: Topic) {
    console.log('TopicListComponent -> Remove Event.');
    item.close();
  }

}
