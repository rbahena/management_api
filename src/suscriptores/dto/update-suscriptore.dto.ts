import { PartialType } from '@nestjs/swagger';
import { CreateSuscriptoreDto } from './create-suscriptore.dto';
import { User } from 'src/users/entities/user.entity';

export class UpdateSuscriptoreDto extends PartialType(CreateSuscriptoreDto) {
    nombre_usuario: string;
    primer_apellido: string;
    segundo_apellido: string;
}
