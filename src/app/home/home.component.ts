import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { TabsComponent } from '../tabs/tabs.component'
import { WordEditorComponent } from '../words/word-editor/word-editor.component'

@Component({
  selector: 'lgsc-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController) {

  }

  startLearning() {
    console.log('startLearning');
  }

  addWord() {
    let editor = this.modalCtrl.create(WordEditorComponent);
    editor.present();
  }

  openTopics() {
    this.navCtrl.parent.select(TabsComponent.TOPICS_TAB_INDEX);
  }

  openWords() {
    this.navCtrl.parent.select(TabsComponent.WORDS_TAB_INDEX);
  }

}
