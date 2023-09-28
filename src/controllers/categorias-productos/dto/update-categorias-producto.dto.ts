import { PartialType } from '@nestjs/swagger';
import { CreateCategoriasProductoDto } from './create-categorias-producto.dto';

export class UpdateCategoriasProductoDto extends PartialType(CreateCategoriasProductoDto) {}
