import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { IS_PUBLIC_ENDPOINT } from 'src/core/decorators/public.decorator';

@Injectable()
export class JwtValidatorGuard extends AuthGuard('jwt_strategy') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublicEndpoint = this.reflector.get(IS_PUBLIC_ENDPOINT, context.getHandler());
    if(isPublicEndpoint) return true;
    return super.canActivate(context);
  }
}
