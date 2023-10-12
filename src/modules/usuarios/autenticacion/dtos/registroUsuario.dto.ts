import { ApiProperty } from '@nestjs/swagger';

export class registroUsuario {
  @ApiProperty()
  correo_electronico: string;

  @ApiProperty()
  contrasena: string;

  @ApiProperty()
  nombre_operacion_prueba: string;

  @ApiProperty()
  auth_strategy: string;
}
