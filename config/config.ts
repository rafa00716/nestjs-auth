import { ConfigModule, ConfigService } from '@nestjs/config';

export function setEnvPath() {
  const envFilePath = `config/${process.env.NODE_ENV.trim()}/.${process.env.NODE_ENV.trim()}.env`;

  ConfigModule.forRoot({
    envFilePath,
    isGlobal: true,
  });
}

export const config = new ConfigService();
