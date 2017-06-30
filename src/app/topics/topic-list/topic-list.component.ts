import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from "ionic-angular";

import { TopicEditorComponent } from "../topic-editor/topic-editor.component";
import { WordListComponent } from "../../words/word-list/word-list.component";

import { Topic } from "../shared/topic.model";
import { TopicService } from "../shared/topic.service";

@Component({
  selector: 'lgsc-topic-list',
  templateUrl: 'topic-list.component.html'
})
export class TopicListComponent implements OnInit {

  private topics: Array<Topic>;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private topicService: TopicService) {

  }

  ngOnInit() {
    this.topicService.findAll().subscribe((topics: Array<Topic>) => {
      this.topics = topics;
    })
  }

  private openEditor() {
    let editor = this.modalCtrl.create(TopicEditorComponent);
    editor.present();
  }

  private seeWords(topic: Topic) {
    this.navCtrl.push(WordListComponent, {
      topic: topic
    });
  }

}
