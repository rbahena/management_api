import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_ENDPOINT } from 'src/core/decorators/public.decorator';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const isPublicEndpoint = this.reflector.get(IS_PUBLIC_ENDPOINT, context.getHandler());
    if (isPublicEndpoint) return true;
    
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.header('Auth');
    const isAuth = authHeader === '123';
    if (!isAuth) throw new UnauthorizedException('No tienes permisos para acceder.');
    return isAuth;
  }
}
