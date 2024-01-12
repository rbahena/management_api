import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import config from 'src/environments/config';

@Injectable()
export class JwtEstrategy extends PassportStrategy(Strategy, 'jwt_strategy') {
  constructor(@Inject(config.KEY) configService: ConfigType<typeof config>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Indica desde donde tomara el token, en este caso, en los headers con valor bearer Token
      ignoreExpiration: false,
      secretOrKey: configService.jwt.jwt_secret, // Obtengo la llave de los environments
    });
  }

  validate(payload: any) {
    return payload;
  }
}
