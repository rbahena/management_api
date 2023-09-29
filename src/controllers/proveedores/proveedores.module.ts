import { Module } from '@nestjs/common';
import { ProveedoresService } from './proveedores.service';
import { ProveedoresController } from './proveedores.controller';
import { Operacione } from '../operaciones/entities/operacione.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ Operacione])],
  controllers: [ProveedoresController],
  providers: [ProveedoresService],
})
export class ProveedoresModule {}
