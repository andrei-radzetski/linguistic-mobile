import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'lgsc-topic-editor',
  templateUrl: 'topic-editor.component.html'
})
export class TopicEditorComponent {

  constructor(
    public viewCtrl: ViewController) { 

  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  done() {
    this.viewCtrl.dismiss();
  }

}
