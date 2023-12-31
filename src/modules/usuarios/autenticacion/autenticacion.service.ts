import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IsNull, Repository } from 'typeorm';

import { registroUsuarioDto } from './dtos/registroUsuario.dto';
import { User } from './entities/usuario.entity';

import { iniciaSesionDto } from './dtos/iniciaSesion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { estatus } from 'src/core/enums/estatus.enum';
import { compareHash, generateHash } from 'src/core/utils/encrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AutenticacionService {
  constructor(
    @InjectRepository(User) private UsuarioRepository: Repository<User>,
    private jwtService: JwtService,
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
        contrasena: await generateHash(contrasena),
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

      const validacionContrasena = await compareHash(
        contrasena,
        existeUsuario.contrasena,
      );
      if (!validacionContrasena)
        throw new HttpException(
          'Validar usuario o contraseña',
          HttpStatus.CONFLICT,
        );

      delete existeUsuario.contrasena;
      delete existeUsuario.fecha_alta;
      delete existeUsuario.fecha_baja;

      return this.generateJwt(existeUsuario);
    } catch (error) {
      throw new HttpException(error, HttpStatus.CONFLICT);
    }
  }

  async generateJwt(user: User) {
    const tokenPayload = {
      id: user.id_usuario,
      correo: user.correo_electronico,
      operacion: user.nombre_operacion_prueba,
      inicioPrueba: user.inicio_prueba,
    };

    return {
      access_token: await this.jwtService.signAsync(tokenPayload),
      user,
    };
  }

  async getAll() {
     return 'hola';
  }
}
