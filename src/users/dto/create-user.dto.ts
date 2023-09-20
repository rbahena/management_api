export class CreateUserDto {
  correo_electronico: string;
  contrasena: string;
  periodo_prueba: boolean;
  fin_prueba: Date;
  auth_strategy: string;
  estatus: boolean;
}
