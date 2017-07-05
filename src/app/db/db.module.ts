import { NgModule } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite';

import { DBInitializationService } from './db-initialization.service';
import { DBManagementService } from './db-management.service';

@NgModule({
  providers: [
    SQLite,
    DBInitializationService,
    DBManagementService
  ]
})
export class DBModule { }
