import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AppService {

  private emitter: EventEmitter<any> = new EventEmitter();

  emit() {
    this.emitter.emit();
  }

  ready(): EventEmitter<any> {
    return this.emitter;
  }

}
