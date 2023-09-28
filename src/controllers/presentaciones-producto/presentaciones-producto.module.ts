import { Module } from '@nestjs/common';
import { PresentacionesProductoService } from './presentaciones-producto.service';
import { PresentacionesProductoController } from './presentaciones-producto.controller';
import { Operacione } from '../operaciones/entities/operacione.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresentacionesProducto } from './entities/presentaciones-producto.entity';

@Module({
  
  imports:[TypeOrmModule.forFeature([ Operacione, PresentacionesProducto])],
  controllers: [PresentacionesProductoController],
  providers: [PresentacionesProductoService],
})
export class PresentacionesProductoModule {}
