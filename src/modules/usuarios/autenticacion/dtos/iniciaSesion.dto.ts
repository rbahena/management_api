import { ApiProperty } from '@nestjs/swagger';

export class iniciaSesionDto {
  @ApiProperty()
  correo_electronico: string;

  @ApiProperty()
  contrasena: string;
}