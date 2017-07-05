import { NgModule } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite';

import { DatabaseService } from './database.service';
import { DatabaseInitService } from './database-init.service';

@NgModule({
  providers: [
    SQLite,
    DatabaseService,
    DatabaseInitService
  ]
})
export class DatabaseModule { }
