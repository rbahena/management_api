export class CreateUserDto {
  correo_electronico: string;
  contrasena: string;
  nombre_operacion_prueba:string;
  inicio_prueba:Date;
  fin_prueba: Date;
  auth_strategy: string;
  fecha_alta:Date;
}
