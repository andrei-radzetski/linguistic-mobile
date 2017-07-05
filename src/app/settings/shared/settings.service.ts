import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Settings } from './settings.model';
import { SettingsRepository } from '../settings.repository';

@Injectable()
export class SettingsService {

  constructor(private repository: SettingsRepository) { }

  saveLang(entity: Settings): Observable<any> {
    return this.repository.saveLang(entity.id, entity.lang.id);
  }

  getCurrentLangKey(): Observable<string> {
    return this.repository.getCurrentLangKey();
  }

  getSettings(): Observable<Settings> {
    return this.repository.getSettings();
  }

}
