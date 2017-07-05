import { NgModule } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite';

import { DatabaseService1 } from './database.service.1';
import { DatabaseService } from './database.service';
import { DatabaseInitService } from './database-init.service';

import { DatabaseMock } from './database.mock';
import { DatabaseSQLite } from './database.sqlite';

@NgModule({
  providers: [
    SQLite,
    DatabaseService,
    DatabaseService1,
    DatabaseInitService,
    DatabaseMock,
    DatabaseSQLite
  ]
})
export class DatabaseModule { }
