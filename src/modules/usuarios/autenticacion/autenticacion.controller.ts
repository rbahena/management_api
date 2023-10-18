import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AutenticacionService } from './autenticacion.service';
import { registroUsuarioDto } from './dtos/registroUsuario.dto';
import { ApiTags } from '@nestjs/swagger';
import { iniciaSesionDto } from './dtos/iniciaSesion.dto';
import config from 'src/environments/config';
import { ConfigType } from '@nestjs/config';

@ApiTags('Autenticación')
@Controller('autenticacion')
export class AutenticacionController {
  constructor(
    private readonly autenticacionService: AutenticacionService,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  @Post('registrarUsuario')
  async registrarUsuario(@Body() registroUsuarioDto: registroUsuarioDto) {
    return await this.autenticacionService.registrarUsuario(registroUsuarioDto);
  }

  @Post('iniciarSesion')
  iniciarSesion(@Body() iniciaSesionDto: iniciaSesionDto) {
    return this.autenticacionService.inciaSesion(iniciaSesionDto);
  }
}
