import { Inject, Injectable } from '@nestjs/common';
import { registroUsuarioDto } from './dtos/registroUsuario.dto';
import { iniciaSesionDto } from './dtos/iniciaSesion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AutenticacionService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {}

  async registrarUsuario(registroUsuarioDto: registroUsuarioDto) {
    const response =  await this.UserRepository.find;
    return response;
  }

  inciaSesion(iniciaSesionDto: iniciaSesionDto) {
    console.log('Datos del usuario a loguear: ', iniciaSesionDto);
    return 'Se logueo correctamente';
  }
}
