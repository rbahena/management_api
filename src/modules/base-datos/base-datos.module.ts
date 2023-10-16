import { Global, Module } from '@nestjs/common';

var mysql = require('mysql');

var clientDB = mysql.createConnection({
  host: 'host',
  user: 'user',
  password: 'password',
  database: 'dbName',
  port: 3306,
});

clientDB.connect();

@Global()
@Module({
  providers: [
    {
      provide: 'DB',
      useValue: clientDB,
    },
  ],
  imports: [],
  exports: ['DB'],
})
export class BaseDatosModule {}
