import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { Topic } from '../shared/topic.model';

@Component({
  selector: 'lgsc-topic-viewer',
  templateUrl: 'topic-viewer.component.html'
})
export class TopicViewerComponent {

  topic: Topic;

  constructor(
    navParams: NavParams,
    private viewController: ViewController) {

    this.topic = navParams.get("data");
  }

  done() {
    this.viewController.dismiss();
  }

  edit() {
    this.viewController.dismiss();
  }

}
