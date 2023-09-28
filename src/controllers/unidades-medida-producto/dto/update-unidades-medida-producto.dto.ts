import { PartialType } from '@nestjs/swagger';
import { CreateUnidadesMedidaProductoDto } from './create-unidades-medida-producto.dto';

export class UpdateUnidadesMedidaProductoDto extends PartialType(CreateUnidadesMedidaProductoDto) {}
