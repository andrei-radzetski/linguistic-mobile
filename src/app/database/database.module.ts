import { NgModule } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite';

import { DatabaseService } from './database.service';
import { DatabaseMock } from './database.mock';
import { DatabaseSQLite } from './database.sqlite';
import { DatabaseInitService } from './database-init.service';

@NgModule({
  providers: [
    SQLite,
    DatabaseService,
    DatabaseMock,
    DatabaseSQLite,
    DatabaseInitService
  ]
})
export class DatabaseModule { }
