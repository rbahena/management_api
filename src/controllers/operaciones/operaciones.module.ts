import { Module } from '@nestjs/common';
import { OperacionesService } from './operaciones.service';
import { OperacionesController } from './operaciones.controller';
import { Operacione } from './entities/operacione.entity';
import { Suscriptor } from 'src/suscriptores/entities/suscriptor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriasProducto } from '../categorias-productos/entities/categorias-producto.entity';
import { EnvasesProducto } from '../envases-productos/entities/envases-producto.entity';
import { UnidadesMedidaProducto } from '../unidades-medida-producto/entities/unidades-medida-producto.entity';
import { PresentacionesProducto } from '../presentaciones-producto/entities/presentaciones-producto.entity';
import { UnidadCompra } from '../unidad-compra/entities/unidad-compra.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Operacione,
      Suscriptor,
      CategoriasProducto,
      EnvasesProducto,
      UnidadesMedidaProducto,
      PresentacionesProducto,
      UnidadCompra
    ]),
  ],
  controllers: [OperacionesController],
  providers: [OperacionesService],
})
export class OperacionesModule {}
