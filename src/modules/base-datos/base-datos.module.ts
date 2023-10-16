import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from 'src/environments/config';
var mysql = require('mysql');

@Global()
@Module({
  providers: [
    {
      provide: 'DB',
      useFactory: (configService: ConfigType<typeof config>) => {
        const { host, username, password, database, port } = configService.database;
        console.log(host, username, password, database, port);
        const clientDB = mysql.createConnection({
          host,
          user:username,
          password,
          database,
          port,
        });

        clientDB.connect();
        return clientDB;
      },
      inject: [config.KEY],
    },
  ],
  imports: [],
  exports: ['DB'],
})
export class BaseDatosModule {}
