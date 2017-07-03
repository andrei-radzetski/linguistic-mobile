import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import { Topic } from "../shared/topic.model";
import { AbstractEditorComponent } from "../../shared/editor/abstract-editor.component";

@Component({
  selector: 'lgsc-topic-editor',
  templateUrl: 'topic-editor.component.html'
})
export class TopicEditorComponent extends AbstractEditorComponent<Topic> {

  constructor(viewCtrl: ViewController, params: NavParams) { 
      super(viewCtrl, params, { create: (): Topic => new Topic() });
  }

  validate(): boolean {
    console.log(this.object);
    return super.validate();
  }

}
