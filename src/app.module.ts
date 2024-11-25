import { setEnvPath } from 'config/config';
setEnvPath();

import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './resources/users/users.module';
import { IamModule } from './iam/iam.module';
import { DatabaseModule } from './database/database.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [DatabaseModule, UsersModule, IamModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
