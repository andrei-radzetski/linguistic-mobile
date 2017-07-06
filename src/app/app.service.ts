import { Injectable, EventEmitter } from '@angular/core';
import { SQLiteDatabaseConfig } from '@ionic-native/sqlite';

import { APP_CONFIG } from './app.config';

/**
 * Global application service. 
 * Contains configs.
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

  /**
   * Returns database config.
   */
  getSQLiteDatabaseConfig(): SQLiteDatabaseConfig {
    return {
      name: `${APP_CONFIG.db.name}_v${APP_CONFIG.db.version}.db`,
      location: APP_CONFIG.db.location
    };
  }

}
