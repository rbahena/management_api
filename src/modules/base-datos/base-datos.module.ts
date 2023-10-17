import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/environments/config';

@Global()
@Module({
  providers: [],
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { host, username, password, database, port } =
          configService.database;
        return {
          type: 'mysql',
          host,
          username,
          password,
          database,
          port,
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class BaseDatosModule {}
