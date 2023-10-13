import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { InventarioModule } from './modules/inventario/inventario.module';
import { ProveedoresModule } from './modules/proveedores/proveedores.module';
import { ProductosModule } from './modules/productos/productos.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { PreciosModule } from './modules/precios/precios.module';

import { ConfigModule } from '@nestjs/config';
import { environments } from './environments/environments';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        environments[process.env.NODE_ENV] || 'environments/develop.env',
      isGlobal: true,
    }),
    InventarioModule,
    PreciosModule,
    ProductosModule,
    ProveedoresModule,
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
