import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from 'ionic-angular';
import { Observable } from "rxjs";

import { TopicEditorComponent } from '../topic-editor/topic-editor.component';
import { RefreshableComponent } from "../../shared/refreshable.component"
import { Topic } from "../shared/topic.model"
import { TopicService } from "../shared/topic.service"

@Component({
  selector: 'lgsc-topic-list',
  templateUrl: 'topic-list.component.html'
})
export class TopicListComponent extends RefreshableComponent implements OnInit {

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

  openEditor() {
    this.modalController.create(TopicEditorComponent).present();
  }

}
