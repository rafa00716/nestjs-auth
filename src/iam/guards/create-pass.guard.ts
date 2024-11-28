import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { Constant } from '../../utils/constants';
import { ErrorHandler } from '../../utils/error.handler';
import { ConfigService } from '@nestjs/config';

const config = new ConfigService();

@Injectable()
export class CreatePassGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request = context.switchToHttp().getRequest();

    const apiKeyReq = req.header(Constant.CREATE_PASS_KEY_NAME);
    const apiKey = config.get(Constant.CREATE_PASS_KEY_NAME);

    if (!apiKeyReq || apiKeyReq !== apiKey) {
      ErrorHandler.unauthorized();
    }

    return true;
  }
}
