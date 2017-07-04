import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Settings } from './settings.model';
import { SettingsRepository } from '../settings.repository';

@Injectable()
export class SettingsService {

  constructor(private repository: SettingsRepository) { }

  save(entity: Settings): Observable<Settings> {
    return this.repository.save(entity);
  }

  getSettings(): Observable<Settings> {
    return this.repository.getSettings();
  }

}
