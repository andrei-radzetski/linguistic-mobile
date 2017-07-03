import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

import { Topic } from "../shared/topic.model";
import { AbstractEditorComponent } from "../../shared/abstract-editor.component";
import { TopicService } from '../shared/topic.service';
import { StringUtil } from '../../shared/string-util';
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'lgsc-topic-editor',
  templateUrl: 'topic-editor.component.html'
})
export class TopicEditorComponent extends AbstractEditorComponent<Topic> {

  constructor(
    viewCtrl: ViewController,
    params: NavParams,
    private topicService: TopicService,
    private alertService: AlertService) {

    super(viewCtrl, params, { create: (): Topic => new Topic() });
  }

  validate(): Observable<any> {
    return StringUtil.isBlank(this.object.name)
      ? Observable.throw(new Error('Invalid topic data.'))
      : Observable.empty();
  }

  save(): Observable<any> {
    return this.topicService.save(this.object);
  }

  onError(err: Error) {
    this.alertService.error(err.message);
  }

}
