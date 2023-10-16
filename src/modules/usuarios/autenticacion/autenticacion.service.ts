import { Inject, Injectable } from '@nestjs/common';
import { registroUsuarioDto } from './dtos/registroUsuario.dto';
import { iniciaSesionDto } from './dtos/iniciaSesion.dto';

@Injectable()
export class AutenticacionService {
  constructor(@Inject('DB') private dbClient: any) {}

  registrarUsuario(registroUsuarioDto: registroUsuarioDto) {
    this.dbClient.query('select * from usuarios', (error, response) => {
      console.log(error);
      console.log(response);
    });
    console.log('Datos del usuario a registrar: ', registroUsuarioDto);
    return 'Se registro el usuario';
  }

  inciaSesion(iniciaSesionDto: iniciaSesionDto) {
    console.log('Datos del usuario a loguear: ', iniciaSesionDto);
    return 'Se logueo correctamente';
  }
}
