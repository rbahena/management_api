import { Body, Controller, Post } from '@nestjs/common';
import { AutenticacionService } from './autenticacion.service';
import { registroUsuario } from './dtos/registroUsuario.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Autenticación')
@Controller('autenticacion')
export class AutenticacionController {
  constructor(private readonly autenticacionService: AutenticacionService) {}

  @Post("registrarUsuario")
  registrarUsuario(@Body() registroUsuarioDto: registroUsuario) {
    return this.autenticacionService.registrarUsuario(registroUsuarioDto);
  }

  @Post("iniciarSesion")
  iniciarSesion(@Body() registroUsuarioDto: registroUsuario) {
    return this.autenticacionService.registrarUsuario(registroUsuarioDto);
  }


}
