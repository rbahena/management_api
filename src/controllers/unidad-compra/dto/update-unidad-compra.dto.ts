import { PartialType } from '@nestjs/swagger';
import { CreateUnidadCompraDto } from './create-unidad-compra.dto';

export class UpdateUnidadCompraDto extends PartialType(CreateUnidadCompraDto) {}
