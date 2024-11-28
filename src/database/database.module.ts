import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

const DB_CONFIG: TypeOrmModuleOptions = {
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  schema: process.env.DB_SCHEMA,
  autoLoadEntities: true,
  logging: false,
  retryAttempts: 2,
  retryDelay: 2000,
  synchronize: false,
};

@Module({
  imports: [TypeOrmModule.forRoot(DB_CONFIG)],
})
export class DatabaseModule {}
