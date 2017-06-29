import { Component } from "@angular/core";

import { HomeComponent } from "../home/home.component";
import { SearchComponent } from "../search/search.component";
import { SettingsComponent } from "../settings/settings.component";

@Component({
  selector: 'lnsc-tabs',
  templateUrl: 'tabs.component.html'
})
export class TabsComponent {

  homeRoot: any = HomeComponent;
  searchRoot: any = SearchComponent;
  settingsRoot: any = SettingsComponent;

}