import { Module } from '@nestjs/common';
import { CategoriasProductosService } from './categorias-productos.service';
import { CategoriasProductosController } from './categorias-productos.controller';
import { Operacione } from '../operaciones/entities/operacione.entity';
import { CategoriasProducto } from './entities/categorias-producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  
  imports:[TypeOrmModule.forFeature([ Operacione, CategoriasProducto])],
  controllers: [CategoriasProductosController],
  providers: [CategoriasProductosService],
})
export class CategoriasProductosModule {}
