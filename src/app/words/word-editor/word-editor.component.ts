import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'lgsc-word-editor',
  templateUrl: 'word-editor.component.html'
})
export class WordEditorComponent {

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
