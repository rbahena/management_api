import { Module } from '@nestjs/common';
import { OperacionesService } from './operaciones.service';
import { OperacionesController } from './operaciones.controller';
import { Operacione } from './entities/operacione.entity';
import { Suscriptor } from 'src/suscriptores/entities/suscriptor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  
  imports:[TypeOrmModule.forFeature([ Operacione, Suscriptor])],
  controllers: [OperacionesController],
  providers: [OperacionesService],
})
export class OperacionesModule {}
