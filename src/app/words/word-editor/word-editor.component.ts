import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

import { Word } from "../shared/word.model";
import { AbstractEditorComponent } from "../../shared/abstract-editor.component";
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'lgsc-word-editor',
  templateUrl: 'word-editor.component.html'
})
export class WordEditorComponent extends AbstractEditorComponent<Word> {

  constructor(
    viewCtrl: ViewController, 
    params: NavParams, 
    private alertService: AlertService) { 

      super(viewCtrl, params, { create: (): Word => new Word() });
  }

  validate(): Observable<any> {
    return Observable.throw(new Error('Unsupported operation.'));
  }

  save(): Observable<any> {
    return Observable.empty();
  }

  onError(err: Error) {
    this.alertService.error(err.message);
  }

  addSynonym() {
    
  }

  addTranslation() {
    
  }
  
}
