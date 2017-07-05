import { Injectable, EventEmitter } from '@angular/core';

/**
 * Global application service.
 * Emit in the AppComponent and subscribe anywhere.
 */
@Injectable()
export class AppService {

  private emitter: EventEmitter<any> = new EventEmitter();

  /**
   * Emit when application was ready.
   */
  emit() {
    this.emitter.emit();
  }

  /**
   * Subscribe when application was ready.
   */
  ready(): EventEmitter<any> {
    return this.emitter;
  }

}
