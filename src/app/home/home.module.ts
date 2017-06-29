import { NgModule } from "@angular/core";
import { IonicModule } from 'ionic-angular';

import { HomeComponent } from "./home.component";

@NgModule({
  imports: [
    IonicModule.forRoot(HomeComponent)
  ],
  declarations: [
    HomeComponent
  ],
  entryComponents: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {

}