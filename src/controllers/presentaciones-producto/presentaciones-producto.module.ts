import { Module } from '@nestjs/common';
import { PresentacionesProductoService } from './presentaciones-producto.service';
import { PresentacionesProductoController } from './presentaciones-producto.controller';

@Module({
  controllers: [PresentacionesProductoController],
  providers: [PresentacionesProductoService],
})
export class PresentacionesProductoModule {}
