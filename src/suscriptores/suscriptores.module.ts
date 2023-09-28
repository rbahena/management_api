import { Module } from '@nestjs/common';
import { SuscriptoresService } from './suscriptores.service';
import { SuscriptoresController } from './suscriptores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Suscriptor } from './entities/suscriptor.entity';
import { User } from 'src/users/entities/user.entity';
import { Operacione } from 'src/controllers/operaciones/entities/operacione.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ Suscriptor, User, Operacione])],
  controllers: [SuscriptoresController],
  providers: [SuscriptoresService],
})
export class SuscriptoresModule {}
