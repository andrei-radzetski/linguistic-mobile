import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { WordEditorComponent } from '../word-editor/word-editor.component';

@Component({
  selector: 'lgsc-word-list',
  templateUrl: 'word-list.component.html'
})
export class WordListComponent {

  constructor(
    private modalController: ModalController) {

  }

  openEditor() {
    this.modalController.create(WordEditorComponent).present();
  }

}
