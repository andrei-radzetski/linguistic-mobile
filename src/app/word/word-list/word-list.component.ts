import { Component, OnInit } from "@angular/core";
import { ModalController, LoadingController, ItemSliding } from "ionic-angular";
import { Observable } from "rxjs";

import { WordEditorComponent } from '../word-editor/word-editor.component';
import { AbstractRefreshableComponent } from "../../shared/abstract-refreshable.component";
import { Word } from "../shared/word.model";
import { WordService } from "../shared/word.service";

@Component({
  selector: 'lgsc-word-list',
  templateUrl: 'word-list.component.html'
})
export class WordListComponent extends AbstractRefreshableComponent implements OnInit {

  words: Word[];

  constructor(
    loadingController: LoadingController,
    private modalController: ModalController,
    private wordService: WordService) {
    
    super(loadingController);
    this.words = [];
  }

  load(): Observable<any> {
    return this.wordService.findAll()
      .flatMap((values: Word[]) => {
        this.words = values
        return Observable.empty();
      });
  }

  ngOnInit() {
    this.initialize();
  }

  add() {
    console.log("WordListComponent -> Add Event.");
    this.modalController.create(WordEditorComponent).present();
  }

  view(word: Word) {
    console.log("WordListComponent -> View Event.");
  }

  edit(item: ItemSliding, word: Word) {
    console.log('WordListComponent -> Edit Event.');
    item.close();
    this.modalController.create(WordEditorComponent).present();
  }

  delete(item: ItemSliding, word: Word) {
    console.log('WordListComponent -> Remove Event.');
    item.close();
  }

}
