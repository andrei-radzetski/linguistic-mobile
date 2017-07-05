import { Component } from '@angular/core';
import { ViewController } from "ionic-angular";

@Component({
  selector: 'lgsc-word-editor',
  templateUrl: 'word-editor.component.html'
})
export class WordEditorComponent {

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
