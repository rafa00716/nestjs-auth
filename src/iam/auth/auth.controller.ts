import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';
import { CreatePassGuard } from '../guards/create-pass.guard';
import { AuthService } from './auth.service';
import { CreatePassDto } from './dto/create-password.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(CreatePassGuard)
  @Post('create-password')
  createPassword(@Body() createPassDto: CreatePassDto) {
    this.authService.createPassword(createPassDto);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
