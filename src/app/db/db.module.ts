import { NgModule } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite';

import { DbService } from "./db.service";

@NgModule({
  providers: [
    SQLite,
    DbService
  ]
})
export class DbModule { }
