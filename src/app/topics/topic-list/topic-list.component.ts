import { Component } from '@angular/core';
import { NavController, ModalController } from "ionic-angular";

import { TopicEditorComponent } from "../topic-editor/topic-editor.component";
import { WordListComponent } from "../../words/word-list/word-list.component";

@Component({
  selector: 'lgsc-topic-list',
  templateUrl: 'topic-list.component.html'
})
export class TopicListComponent {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) { }

  openEditor() {
    let editor = this.modalCtrl.create(TopicEditorComponent);
    editor.present();
  }

  seeWords() {
    this.navCtrl.push(WordListComponent);
  }

}
