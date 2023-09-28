import { Module } from '@nestjs/common';
import { EnvasesProductosService } from './envases-productos.service';
import { EnvasesProductosController } from './envases-productos.controller';

@Module({
  controllers: [EnvasesProductosController],
  providers: [EnvasesProductosService],
})
export class EnvasesProductosModule {}
