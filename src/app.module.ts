import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventarioModule } from './modules/inventario/inventario.module';
import { ProveedorModule } from './modules/proveedor/proveedor.module';
import { ProductoModule } from './modules/producto/producto.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { PreciosModule } from './modules/precios/precios.module';

@Module({
  imports: [
    InventarioModule,
    PreciosModule,
    ProductoModule,
    ProveedorModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
