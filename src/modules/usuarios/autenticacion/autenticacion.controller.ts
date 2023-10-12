import { Body, Controller, Post } from '@nestjs/common';
import { AutenticacionService } from './autenticacion.service';
import { registroUsuarioDto } from './dtos/registroUsuario.dto';
import { ApiTags } from '@nestjs/swagger';
import { iniciaSesionDto } from './dtos/iniciaSesion.dto';

@ApiTags('Autenticación')
@Controller('autenticacion')
export class AutenticacionController {
  constructor(private readonly autenticacionService: AutenticacionService) {}

  @Post("registrarUsuario")
  registrarUsuario(@Body() registroUsuarioDto: registroUsuarioDto) {
    return this.autenticacionService.registrarUsuario(registroUsuarioDto);
  }

  @Post("iniciarSesion")
  iniciarSesion(@Body() iniciaSesionDto: iniciaSesionDto) {
    return this.autenticacionService.inciaSesion(iniciaSesionDto);
  }


}
