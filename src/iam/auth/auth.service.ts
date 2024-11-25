import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreatePassDto } from './dto/create-password.dto';
import { UsersService } from '../../resources/users/users.service';
import { ErrorHandler } from 'src/utils/error.handler';
import { LoginDto } from './dto/login.dto';
import { User } from '../../resources/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async createPassword(createPassDto: CreatePassDto) {
    const user = await this.usersService.findOne(createPassDto.userId);
    if (!user) {
      ErrorHandler.notFoundEntry('User');
    }
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createPassDto.password, salt);
    return this.usersService.update(createPassDto.userId, { password: hash });
  }

  async validateUser(loginDto: LoginDto) {
    const user = await this.usersService.findByEmailOnlyPassword(
      loginDto.email,
    );

    if (!user) {
      ErrorHandler.notFoundEntry('User');
    }

    const isMatch = await bcrypt.compare(loginDto.password, user.password);

    if (!isMatch) {
      ErrorHandler.unauthorized('Email or Password are wrong');
    }

    return this.usersService.findByEmail(loginDto.email);
  }

  async login(user: User) {
    const { id, email, name, fatherLastName, moderLastName, roles } = user;
    const payload = { id, email, name, fatherLastName, moderLastName, roles };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
