import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { TopicEditorComponent } from '../topic-editor/topic-editor.component';

@Component({
  selector: 'lgsc-topic-list',
  templateUrl: 'topic-list.component.html'
})
export class TopicListComponent {

  constructor(
    private modalController: ModalController) {

  }

  openEditor() {
    this.modalController.create(TopicEditorComponent).present();
  }

}
