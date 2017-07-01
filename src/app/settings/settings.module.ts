import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";

import { SettingsComponent } from "./settings.component";

@NgModule({
  imports: [
    IonicModule
  ],
  declarations: [
    SettingsComponent
  ],
  entryComponents: [
    SettingsComponent
  ],
  exports: [
    SettingsComponent
  ]
})
export class SettingsModule { }
