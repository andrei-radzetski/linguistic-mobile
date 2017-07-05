import { Component } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'lgsc-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {

  constructor(appService: AppService) {
    appService.ready().subscribe(() => console.log('AppService ready -> HomeComponent'));
  }

  startLearning() {
    console.log('HomeComponent -> Start Learning Event');
  }

  addNewWord() {
    console.log('HomeComponent -> Add New Word Event');
  }

}
