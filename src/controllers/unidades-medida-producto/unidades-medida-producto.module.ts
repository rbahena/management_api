import { Module } from '@nestjs/common';
import { UnidadesMedidaProductoService } from './unidades-medida-producto.service';
import { UnidadesMedidaProductoController } from './unidades-medida-producto.controller';
import { Operacione } from '../operaciones/entities/operacione.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ Operacione, UnidadesMedidaProductoController])],
  controllers: [UnidadesMedidaProductoController],
  providers: [UnidadesMedidaProductoService],
})
export class UnidadesMedidaProductoModule {}
