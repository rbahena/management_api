import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestDbconnectionModule } from './test-dbconnection/test-dbconnection.module';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'srv909.hstgr.io',
      port:3306,
      database:'u178390542_gestion',
      username:'u178390542_developer',
      password:'dev3l0pEr*',
      entities:[join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize:false
    }),
    UsersModule,
    TestDbconnectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
