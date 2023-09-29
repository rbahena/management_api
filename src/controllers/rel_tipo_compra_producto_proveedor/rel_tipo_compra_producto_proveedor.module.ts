import { Module } from '@nestjs/common';
import { RelTipoCompraProductoProveedorService } from './rel_tipo_compra_producto_proveedor.service';
import { RelTipoCompraProductoProveedorController } from './rel_tipo_compra_producto_proveedor.controller';
import { Operacione } from '../operaciones/entities/operacione.entity';
import { Producto } from '../productos/entities/producto.entity';
import { Proveedore } from '../proveedores/entities/proveedore.entity';
import { UnidadCompra } from '../unidad-compra/entities/unidad-compra.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ Operacione, Producto, Proveedore, UnidadCompra])],
  controllers: [RelTipoCompraProductoProveedorController],
  providers: [RelTipoCompraProductoProveedorService],
})
export class RelTipoCompraProductoProveedorModule {}
