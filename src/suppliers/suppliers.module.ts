import { Module } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { SuppliersController } from './suppliers.controller';
import { proveedores } from './entities/supplier.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([proveedores])],
  controllers: [SuppliersController],
  providers: [SuppliersService],
})
export class SuppliersModule {}
