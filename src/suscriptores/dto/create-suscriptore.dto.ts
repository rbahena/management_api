import { User } from 'src/users/entities/user.entity';

export class CreateSuscriptoreDto {
  fk_usuario: User;
  nombre_usuario: string;
  primer_apellido: string;
  segundo_apellido: string;
  operaciones_disponibles: number;
}
