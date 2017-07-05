import { Component } from '@angular/core';

import { HomeComponent } from '../home/home.component';
import { WordListComponent } from '../word/word-list/word-list.component';
// import { TopicListComponent } from '../topic/topic-list/topic-list.component';
// import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'lnsc-tabs',
  templateUrl: 'tabs.component.html'
})
export class TabsComponent {

  homeRoot: any = HomeComponent;
  wordsRoot: any = WordListComponent;

  // topicsRoot: any = TopicListComponent;
  // settingsRoot: any = SettingsComponent;

}
