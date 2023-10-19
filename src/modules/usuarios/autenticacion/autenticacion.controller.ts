import { Body, Controller, Inject, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { ApiKeyGuard } from 'src/core/guards/api-key/api-key.guard';
import { registroUsuarioDto } from './dtos/registroUsuario.dto';
import { AutenticacionService } from './autenticacion.service';
import { iniciaSesionDto } from './dtos/iniciaSesion.dto';
import { User } from './entities/usuario.entity';
import config from 'src/environments/config';
import { ConfigType } from '@nestjs/config';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(ApiKeyGuard)
@ApiTags('Autenticación')
@Controller('autenticacion')
export class AutenticacionController {
  constructor(
    private readonly autenticacionService: AutenticacionService,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  @SetMetadata('isPublic', true)
  @Post('registrarUsuario')
  registrarUsuario(
    @Body() registroUsuarioDto: registroUsuarioDto,
  ): Promise<User> {
    return this.autenticacionService.registrarUsuario(registroUsuarioDto);
  }

  

  @Post('iniciarSesion')
  iniciarSesion(@Body() iniciaSesionDto: iniciaSesionDto): Promise<User> {
    return this.autenticacionService.inciaSesion(iniciaSesionDto);
  }
}
