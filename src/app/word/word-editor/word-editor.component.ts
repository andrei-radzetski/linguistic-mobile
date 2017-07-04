import { Component, OnInit } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

import { Word } from "../shared/word.model";
import { Lang } from "../../lang/shared/lang.model";
import { AlertService } from '../../shared/alert.service';
import { LangService } from '../../lang/shared/lang.service';
import { AbstractEditorComponent } from "../../shared/abstract-editor.component";

@Component({
  selector: 'lgsc-word-editor',
  templateUrl: 'word-editor.component.html'
})
export class WordEditorComponent extends AbstractEditorComponent<Word> implements OnInit {

  langs: Lang[];

  constructor(
    viewCtrl: ViewController,
    params: NavParams,
    private alertService: AlertService,
    private langService: LangService) {

    super(viewCtrl, params, { create: (): Word => new Word() });
    this.langs = [];
  }

  ngOnInit() {
    // todo loading
    this.langService.findAll().subscribe((values: Lang[]) => {
      this.langs = values;
      console.log(values);
    })
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
