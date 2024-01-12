import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
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
          synchronize:false,
          autoLoadEntities:true, 
          connectTimeout:10000, 
          entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class BaseDatosModule {}
