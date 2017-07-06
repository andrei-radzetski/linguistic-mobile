import { Component, OnInit } from "@angular/core";
import { ModalController, LoadingController } from "ionic-angular";
import { Observable } from "rxjs";

import { WordEditorComponent } from '../word-editor/word-editor.component';
import { RefreshableComponent } from "../../shared/refreshable.component";
import { Word } from "../shared/word.model";
import { WordService } from "../shared/word.service";

@Component({
  selector: 'lgsc-word-list',
  templateUrl: 'word-list.component.html'
})
export class WordListComponent extends RefreshableComponent implements OnInit {

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

  openEditor() {
    this.modalController.create(WordEditorComponent).present();
  }

}
