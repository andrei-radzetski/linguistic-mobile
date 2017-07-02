import { NgModule } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite';

import { DBManagementService } from "./db-management.service";

@NgModule({
  providers: [
    SQLite,
    DBManagementService
  ]
})
export class DBModule { }
