import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import { Word } from "../shared/word.model";
import { AbstractEditorComponent } from "../../shared/abstract-editor.component";

@Component({
  selector: 'lgsc-word-editor',
  templateUrl: 'word-editor.component.html'
})
export class WordEditorComponent extends AbstractEditorComponent<Word> {

  constructor(viewCtrl: ViewController, params: NavParams) { 
      super(viewCtrl, params, { create: (): Word => new Word() });
  }

  validate(): boolean {
    return super.validate();
  }

  addSynonym() {
    
  }

  addTranslation() {
    
  }
  
}
