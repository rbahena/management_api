import { PartialType } from '@nestjs/swagger';
import { CreateEnvasesProductoDto } from './create-envases-producto.dto';

export class UpdateEnvasesProductoDto extends PartialType(CreateEnvasesProductoDto) {}
