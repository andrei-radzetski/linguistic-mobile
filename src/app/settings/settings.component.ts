import { Component } from '@angular/core';

@Component({
  selector: 'lgsc-settings',
  templateUrl: 'settings.component.html'
})
export class SettingsComponent {

  autoSync: boolean = false;

  syncDate: string;

  every: string;

  constructor() {
    this.updareSyncDate();
  }

  sync() {
    this.updareSyncDate();
    console.log(this.autoSync);
    console.log(this.syncDate);
    console.log(this.every);
  }

  private updareSyncDate() {
    this.syncDate = new Date().toISOString();
  }

}
