import { Component, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { WordEditorComponent } from '../word-editor/word-editor.component';

import { WordGroup } from '../shared/word-group.model';
import { WordService } from "../shared/word.service";

@Component({
  selector: 'lgsc-word-list',
  templateUrl: 'word-list.component.html'
})
export class WordListComponent implements OnInit {

  private wordGroups: Array<WordGroup>;

  constructor(private modalCtrl: ModalController, private wordService: WordService) { }

  ngOnInit() {
    this.wordService.findByTopic()
      .subscribe((wordsGroups: Array<WordGroup>) => {
        this.wordGroups = wordsGroups;
      });
  }

  openEditor() {
    let editor = this.modalCtrl.create(WordEditorComponent);
    editor.present();
  }

}
