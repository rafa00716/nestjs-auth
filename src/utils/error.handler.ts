import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorResponseInterface } from 'src/models/error.models';

export class ErrorHandler {
  static duplicatedEntry(subject?: string): HttpException {
    const error: ErrorResponseInterface = {
      message: [`The ${subject ?? 'provided entry'} already exists`],
      error: 'Conflict',
      statusCode: HttpStatus.CONFLICT,
    };
    throw new HttpException(error, error.statusCode);
  }

  static notFoundEntry(subject?: string): HttpException {
    const error: ErrorResponseInterface = {
      message: [`The ${subject ?? 'provided entry'} doesn't exist`],
      error: 'Not Found',
      statusCode: HttpStatus.NOT_FOUND,
    };
    throw new HttpException(error, error.statusCode);
  }

  static roleRequired(): HttpException {
    const error: ErrorResponseInterface = {
      message: ['User must have at least one role assigned.'],
      error: 'Bad Request',
      statusCode: HttpStatus.BAD_REQUEST,
    };
    throw new HttpException(error, error.statusCode);
  }

  static unauthorized(customMessage?: string): HttpException {
    const error: ErrorResponseInterface = {
      message: [customMessage ?? 'Unauthorized action'],
      error: 'Unauthorized',
      statusCode: HttpStatus.UNAUTHORIZED,
    };
    throw new HttpException(error, error.statusCode);
  }
}
