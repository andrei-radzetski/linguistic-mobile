import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Word } from '../shared/word.model';

@Component({
  selector: 'lgsc-word-viewer',
  templateUrl: 'word-viewer.component.html'
})
export class WordViewerComponent {

  word: Word;

  constructor(navParams: NavParams) {
    this.word = navParams.get('word');
  }

}
