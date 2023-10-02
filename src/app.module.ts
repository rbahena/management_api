import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { SuscriptoresModule } from './suscriptores/suscriptores.module';
import { OperacionesModule } from './controllers/operaciones/operaciones.module';
import { CategoriasProductosModule } from './controllers/categorias-productos/categorias-productos.module';
import { EnvasesProductosModule } from './controllers/envases-productos/envases-productos.module';
import { UnidadesMedidaProductoModule } from './controllers/unidades-medida-producto/unidades-medida-producto.module';
import { PresentacionesProductoModule } from './controllers/presentaciones-producto/presentaciones-producto.module';
import { UnidadCompraModule } from './controllers/unidad-compra/unidad-compra.module';
import { ProveedoresModule } from './controllers/proveedores/proveedores.module';
import { ProductosModule } from './controllers/productos/productos.module';
import { RelTipoCompraProductoProveedorModule } from './controllers/rel_tipo_compra_producto_proveedor/rel_tipo_compra_producto_proveedor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'srv909.hstgr.io',
      port: 3306,
      database: 'u178390542_gestion',
      username: 'u178390542_developer',
      password: 'dev3l0pEr*',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
    UsersModule,
    SuscriptoresModule,
    OperacionesModule,
    CategoriasProductosModule,
    EnvasesProductosModule,
    UnidadesMedidaProductoModule,
    PresentacionesProductoModule,
    UnidadCompraModule,
    ProveedoresModule,
    ProductosModule,
    RelTipoCompraProductoProveedorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
