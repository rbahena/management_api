import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IsNull, Repository } from 'typeorm';

import { registroUsuarioDto } from './dtos/registroUsuario.dto';
import { User } from './entities/usuario.entity';

import { iniciaSesionDto } from './dtos/iniciaSesion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { estatus } from 'src/core/enums/estatus.enum';

@Injectable()
export class AutenticacionService {
  constructor(
    @InjectRepository(User) private UsuarioRepository: Repository<User>,
  ) {}

  async registrarUsuario(registroUsuarioDto: registroUsuarioDto) {
    try {
      const { contrasena, correo_electronico, ...user } = registroUsuarioDto;
      const existeCorreo = await this.UsuarioRepository.findOne({
        where: { correo_electronico, estatus: estatus.ACTIVO },
      });

      if (existeCorreo)
        throw new HttpException(
          'El correo electrónico ya se encuentra registrado',
          HttpStatus.CONFLICT,
        );

      const usuarioEncriptado = {
        ...user,
        correo_electronico,
        contrasena: contrasena, //await generateHash(contrasena),
      };

      const nuevoUsuario = this.UsuarioRepository.create(usuarioEncriptado);
      return this.UsuarioRepository.save(nuevoUsuario);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async inciaSesion(iniciaSesionDto: iniciaSesionDto) {
    try {
      const { contrasena, correo_electronico } = iniciaSesionDto;
      const existeUsuario = await this.UsuarioRepository.findOne({
        where: { correo_electronico, estatus: estatus.ACTIVO },
      });

      if (!existeUsuario)
        throw new HttpException('El usuario no existe', HttpStatus.NOT_FOUND);

      const validacionContrasena = iniciaSesionDto.contrasena; //await compareHash(contrasena, userExist.contrasena);
      if (!validacionContrasena)
        throw new HttpException(
          'Validar usuario o contraseña',
          HttpStatus.CONFLICT,
        );

      delete existeUsuario.contrasena;
      delete existeUsuario.fecha_alta;
      delete existeUsuario.fecha_baja;

      /*const tokenPayload = {
        id: userExist.id_usuario,
        correo: userExist.correo_electronico,
        operacion: userExist.nombre_operacion_prueba,
        inicioPrueba: userExist.inicio_prueba,
      };
      const token = await this.jwtService.signAsync(tokenPayload);
      const data = {
        token,
        user: userExist,
      };
      return data; */
      return existeUsuario;
    } catch (error) {
      throw new HttpException(
        'Ocurrio un error al iniciar sesión, intentar nuevamente.',
        HttpStatus.CONFLICT,
      );
    }
  }
}
