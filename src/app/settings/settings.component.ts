import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs';

import { Lang } from '../lang/shared/lang.model';
import { Settings } from './shared/settings.model';
import { LangService } from '../lang/shared/lang.service';
import { SettingsService } from './shared/settings.service';

@Component({
  selector: 'lgsc-settings',
  templateUrl: 'settings.component.html'
})
export class SettingsComponent {

  langs: Lang[];
  settings: Settings;

  constructor(
    private langService: LangService,
    private translateService: TranslateService,
    private settingsService: SettingsService,
    private loadingController: LoadingController) {

    this.settings = new Settings();
    this.langs = [];
  }

  ionViewDidEnter() {
    let loading = this.loadingController.create();
    loading.present();
    this.load().subscribe(
      () => { },
      () => loading.dismiss(),
      () => loading.dismiss())
  }

  sync() {
    this.updareSyncDate();
    console.log(this.settings);
  }

  onLangChange() {
    if (this.settings && this.settings.lang) {
      this.translateService.use(this.settings.lang.key);
    }
  }

  compareLang(lang1: Lang, lang2: Lang): boolean {
    return lang1 && lang1.compare(lang2) || lang1 === lang2;
  }

  private updareSyncDate() {
    this.settings.lastSync = new Date().toISOString();
  }

  private load(): Observable<any> {
    return this.langService.getTechnical()
      .flatMap((value: Lang[]) => {
        this.langs = value;
        return this.settingsService.getSettings();
      }).flatMap((value: Settings) => {
        this.settings = value;
        this.onLangChange();
        return Observable.empty();
      });
  }

}
