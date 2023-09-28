import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { SuscriptoresModule } from './suscriptores/suscriptores.module';
import { OperacionesModule } from './controllers/operaciones/operaciones.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'srv909.hstgr.io',
      port: 3306,
      database: 'u178390542_gestion',
      username: 'u178390542_developer',
      password: 'dev3l0pEr*',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
    UsersModule,
    SuscriptoresModule,
    OperacionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
