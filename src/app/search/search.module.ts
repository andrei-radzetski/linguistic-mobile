import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SearchComponent } from './search.component';

@NgModule({
  imports: [
    IonicModule.forRoot(SearchComponent)
  ],
  declarations: [
    SearchComponent
  ],
  entryComponents: [
    SearchComponent
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
