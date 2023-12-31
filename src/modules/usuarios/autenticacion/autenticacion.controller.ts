import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { IsPublicEndpointGuard } from 'src/core/guards/isPublicEndpoint/isPublicEndpoint.guard';
import { registroUsuarioDto } from './dtos/registroUsuario.dto';
import { AutenticacionService } from './autenticacion.service';
import { iniciaSesionDto } from './dtos/iniciaSesion.dto';
import { User } from './entities/usuario.entity';
import config from 'src/environments/config';
import { ConfigType } from '@nestjs/config';
import { ApiTags } from '@nestjs/swagger';
import { isPublicEndpoint } from 'src/core/decorators/public.decorator';
import { JwtValidatorGuard } from 'src/core/guards/jwtValidator/jwtValidator.guard';

@UseGuards(IsPublicEndpointGuard)
@UseGuards(JwtValidatorGuard)

@ApiTags('Autenticación')
@Controller('autenticacion')
export class AutenticacionController {
  constructor(
    private readonly autenticacionService: AutenticacionService,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  @isPublicEndpoint()
  @Post('registrarUsuario')
  registrarUsuario(
    @Body() registroUsuarioDto: registroUsuarioDto,
  ): Promise<User> {
    return this.autenticacionService.registrarUsuario(registroUsuarioDto);
  }

  @isPublicEndpoint()
  @Post('iniciarSesion')
  iniciarSesion(@Body() iniciaSesionDto: iniciaSesionDto): Promise<any> {
    return this.autenticacionService.inciaSesion(iniciaSesionDto);
  }

  @Get()
  //@UseGuards(JwtValidatorGuard)
  //@isPublicEndpoint() // Si se agrega este decorador, se indica que se puede invocar el metodo sin pasarle en los header el valor: "isPublicEndpoint"
  obtenerUsuarios() {
    return this.autenticacionService.getAll();
  }
}
