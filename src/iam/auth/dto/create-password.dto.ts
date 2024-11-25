import { IsString, IsUUID, MinLength, IsNotEmpty } from 'class-validator';

export class CreatePassDto {
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'The password must be at least 8 characters long' })
  password: string;
}
