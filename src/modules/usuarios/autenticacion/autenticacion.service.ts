import { Injectable } from '@nestjs/common';
import { registroUsuario } from './dtos/registroUsuario.dto';

@Injectable()
export class AutenticacionService {

    registrarUsuario(registroUsuarioDto: registroUsuario){
        return "Se registro el usuario";
    }
}
