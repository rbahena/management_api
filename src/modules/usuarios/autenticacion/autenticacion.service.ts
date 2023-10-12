import { Injectable } from '@nestjs/common';
import { registroUsuarioDto } from './dtos/registroUsuario.dto';
import { iniciaSesionDto } from './dtos/iniciaSesion.dto';

@Injectable()
export class AutenticacionService {
  
    registrarUsuario(registroUsuarioDto: registroUsuarioDto) {
    console.log('Datos del usuario a registrar: ', registroUsuarioDto);
    return 'Se registro el usuario';
  }

  inciaSesion(iniciaSesionDto: iniciaSesionDto) {
    console.log('Datos del usuario a loguear: ', iniciaSesionDto);
    return 'Se logueo correctamente';
  }
}
