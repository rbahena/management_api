import { PartialType } from '@nestjs/swagger';
import { CreateSuscriptoreDto } from './create-suscriptore.dto';

export class UpdateSuscriptoreDto extends PartialType(CreateSuscriptoreDto) {}
