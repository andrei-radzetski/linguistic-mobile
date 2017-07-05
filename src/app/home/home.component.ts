import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { AppService } from '../app.service';
import { WordEditorComponent } from '../word/word-editor/word-editor.component';

@Component({
  selector: 'lgsc-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {

  constructor(
    appService: AppService, 
    private modalController: ModalController) {

    appService.ready().subscribe(() => console.log('AppService ready -> HomeComponent'));
  }

  startLearning() {
    console.log('HomeComponent -> Start Learning Event');
  }

  addNewWord() {
    this.modalController.create(WordEditorComponent).present();
  }

}
