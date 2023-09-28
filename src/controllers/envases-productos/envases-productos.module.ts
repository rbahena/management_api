import { Module } from '@nestjs/common';
import { EnvasesProductosService } from './envases-productos.service';
import { EnvasesProductosController } from './envases-productos.controller';
import { Operacione } from '../operaciones/entities/operacione.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  
  imports:[TypeOrmModule.forFeature([ Operacione, EnvasesProductosController])],
  controllers: [EnvasesProductosController],
  providers: [EnvasesProductosService],
})
export class EnvasesProductosModule {}
