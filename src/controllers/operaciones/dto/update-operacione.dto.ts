import { PartialType } from '@nestjs/swagger';
import { CreateOperacioneDto } from './create-operacione.dto';

export class UpdateOperacioneDto extends PartialType(CreateOperacioneDto) {}
