import { PartialType } from '@nestjs/swagger';
import { CreatePresentacionesProductoDto } from './create-presentaciones-producto.dto';

export class UpdatePresentacionesProductoDto extends PartialType(CreatePresentacionesProductoDto) {}
