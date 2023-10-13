import { Body, Controller, Post } from '@nestjs/common';
import { AutenticacionService } from './autenticacion.service';
import { registroUsuarioDto } from './dtos/registroUsuario.dto';
import { ApiTags } from '@nestjs/swagger';
import { iniciaSesionDto } from './dtos/iniciaSesion.dto';
import { ConfigService } from '@nestjs/config';

@ApiTags('Autenticación')
@Controller('autenticacion')
export class AutenticacionController {
  constructor(
    private readonly autenticacionService: AutenticacionService,
    private readonly configService: ConfigService,
  ) {}

  @Post('registrarUsuario')
  registrarUsuario(@Body() registroUsuarioDto: registroUsuarioDto) {
    const api_key = this.configService.get<string>('API_KEY');
    console.log(api_key);
    return this.autenticacionService.registrarUsuario(registroUsuarioDto);
  }

  @Post('iniciarSesion')
  iniciarSesion(@Body() iniciaSesionDto: iniciaSesionDto) {
    return this.autenticacionService.inciaSesion(iniciaSesionDto);
  }
}
