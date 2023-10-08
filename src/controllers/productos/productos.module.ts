import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { Operacione } from '../operaciones/entities/operacione.entity';
import { CategoriasProducto } from '../categorias-productos/entities/categorias-producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresentacionesProducto } from '../presentaciones-producto/entities/presentaciones-producto.entity';
import { UnidadesMedidaProducto } from '../unidades-medida-producto/entities/unidades-medida-producto.entity';
import { EnvasesProducto } from '../envases-productos/entities/envases-producto.entity';
import { Producto } from './entities/producto.entity';

@Module({
  
  imports:[TypeOrmModule.forFeature([ Operacione, CategoriasProducto, PresentacionesProducto, UnidadesMedidaProducto, EnvasesProducto, Producto])],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
