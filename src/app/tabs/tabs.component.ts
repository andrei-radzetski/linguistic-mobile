import { Component } from "@angular/core";

import { HomeComponent } from "../home/home.component";
import { TopicListComponent } from "../topics/topic-list/topic-list.component";
import { WordListComponent } from "../words/word-list/word-list.component";
import { SettingsComponent } from "../settings/settings.component";

@Component({
  selector: 'lnsc-tabs',
  templateUrl: 'tabs.component.html'
})
export class TabsComponent {

  private homeRoot: any = HomeComponent;

  private topicsRoot: any = TopicListComponent;

  private wordsRoot: any = WordListComponent;
  
  private settingsRoot: any = SettingsComponent;

}
