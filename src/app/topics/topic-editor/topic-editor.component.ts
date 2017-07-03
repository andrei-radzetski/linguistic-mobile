import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import { Topic } from "../shared/topic.model";
import { AbstractEditorComponent } from "../../shared/editor/abstract-editor.component";
import { TopicService } from '../shared/topic.service';

@Component({
  selector: 'lgsc-topic-editor',
  templateUrl: 'topic-editor.component.html'
})
export class TopicEditorComponent extends AbstractEditorComponent<Topic> {

  constructor(
    viewCtrl: ViewController, 
    params: NavParams, 
    private topicService: TopicService) { 

      super(viewCtrl, params, { create: (): Topic => new Topic() });
  }

  validate(): boolean {
    return super.validate();
  }

  protected done() {
    // todo
    console.log(this.object);
    this.topicService.save(this.object).subscribe();
    //super.done();
  }

}
