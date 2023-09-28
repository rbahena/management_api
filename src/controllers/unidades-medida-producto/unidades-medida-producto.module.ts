import { Module } from '@nestjs/common';
import { UnidadesMedidaProductoService } from './unidades-medida-producto.service';
import { UnidadesMedidaProductoController } from './unidades-medida-producto.controller';

@Module({
  controllers: [UnidadesMedidaProductoController],
  providers: [UnidadesMedidaProductoService],
})
export class UnidadesMedidaProductoModule {}
