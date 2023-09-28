import { Module } from '@nestjs/common';
import { UnidadCompraService } from './unidad-compra.service';
import { UnidadCompraController } from './unidad-compra.controller';
import { Operacione } from '../operaciones/entities/operacione.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ Operacione])],
  controllers: [UnidadCompraController],
  providers: [UnidadCompraService],
})
export class UnidadCompraModule {}
