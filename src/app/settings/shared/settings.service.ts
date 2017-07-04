import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Settings } from './settings.model';
import { SettingsDAO } from '../settings.dao';

@Injectable()
export class SettingsService {

  constructor(private dao: SettingsDAO) { }

  save(entity: Settings): Observable<Settings> {
    return this.dao.save(entity);
  }

  getSettings(): Observable<Settings> {
    return this.dao.getSettings();
  }

}
