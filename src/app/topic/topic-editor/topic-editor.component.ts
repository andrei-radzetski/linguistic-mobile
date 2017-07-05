import { Component } from '@angular/core';
import { ViewController } from "ionic-angular";

@Component({
  selector: 'lgsc-topic-editor',
  templateUrl: 'topic-editor.component.html'
})
export class TopicEditorComponent {

  constructor(
    private viewController: ViewController) {

  }

  cancel() {
    this.viewController.dismiss();
  }

  done() {
    this.viewController.dismiss();
  }

}
