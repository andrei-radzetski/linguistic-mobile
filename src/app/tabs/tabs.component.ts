import { Component } from '@angular/core';

import { HomeComponent } from '../home/home.component';
import { TopicListComponent } from '../topics/topic-list/topic-list.component';
import { WordListComponent } from '../words/word-list/word-list.component';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'lnsc-tabs',
  templateUrl: 'tabs.component.html'
})
export class TabsComponent {

  public static readonly TOPICS_TAB_INDEX = 1;

  public static readonly WORDS_TAB_INDEX = 2;

  homeRoot: any = HomeComponent;

  topicsRoot: any = TopicListComponent;

  wordsRoot: any = WordListComponent;
  
  settingsRoot: any = SettingsComponent;

}
