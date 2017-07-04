import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoadingController, Loading } from 'ionic-angular';

import { Lang } from '../lang/shared/lang.model';
import { LangService } from '../lang/shared/lang.service';

@Component({
  selector: 'lgsc-settings',
  templateUrl: 'settings.component.html'
})
export class SettingsComponent implements OnInit {

  autoSync: boolean = false;
  syncDate: string;
  every: string;
  lang: Lang;
  langs: Array<Lang> = [];
  private loading: Loading;

  constructor(
    private langService: LangService, 
    private translateService: TranslateService,
    loadingController: LoadingController) {

    this.updareSyncDate();
    this.loading = loadingController.create();
  }

  ngOnInit() {
    this.loading.present();
    this.langService.getTechnical().subscribe(
      (value: Lang[]) => this.langs = value,
      () => this.loading.dismiss(),
      () => this.loading.dismiss());
  }

  sync() {
    this.updareSyncDate();
    console.log(this.autoSync);
    console.log(this.syncDate);
    console.log(this.every);
    console.log(this.lang);
  }

  onLangChange() {
    if (this.lang) {
      this.translateService.use(this.lang.key);
    }
  }

  compareLang(lang1: Lang, lang2: Lang): boolean {
    return lang1 && lang1.compare(lang2) || lang1 === lang2;
  }

  private updareSyncDate() {
    this.syncDate = new Date().toISOString();
  }

}
