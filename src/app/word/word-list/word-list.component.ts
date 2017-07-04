import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController } from 'ionic-angular';

import { WordEditorComponent } from '../word-editor/word-editor.component';
import { WordViewerComponent } from '../word-viewer/word-viewer.component';

import { WordGroup } from '../shared/word-group.model';
import { Word } from '../shared/word.model';
import { Topic } from '../../topics/shared/topic.model';

import { WordService } from '../shared/word.service';

@Component({
  selector: 'lgsc-word-list',
  templateUrl: 'word-list.component.html'
})
export class WordListComponent implements OnInit {

  wordGroups: Array<WordGroup>;
  topic: Topic;

  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private wordService: WordService,
    navParams: NavParams) {

    this.topic = navParams.get('topic');
  }

  ngOnInit() {
    let source = this.wordService.findAll();

    if (this.topic) {
      source = this.wordService.findByTopic(this.topic);
    }

    source.subscribe((wordsGroups: Array<WordGroup>) => {
      this.wordGroups = wordsGroups;
    });
  }

  openEditor() {
    this.modalCtrl.create(WordEditorComponent).present();
  }

  openViewer(word: Word) {
    this.navCtrl.push(WordViewerComponent, {
      word: word
    });
  }

}
