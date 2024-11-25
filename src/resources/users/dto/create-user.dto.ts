import {
  IsString,
  IsOptional,
  IsEmail,
  IsUUID,
  MinLength,
  IsNotEmpty,
  IsArray,
} from 'class-validator';
import { User } from '../entities/user.entity';
import { Role } from '../entities/role.entity';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  fatherLastName: string;

  @IsOptional()
  @IsString()
  moderLastName?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: 'The password must be at least 8 characters long' })
  password: string;

  @IsNotEmpty()
  @IsArray()
  roles?: Role[] | number[];

  @IsOptional()
  @IsUUID()
  createdBy?: User;

  @IsOptional()
  @IsUUID()
  upatedBy?: User;
}
