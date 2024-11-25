import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { In, Repository } from 'typeorm';
import { ErrorHandler } from '../../utils/error.handler';
import { Role } from './entities/role.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private repositoryUser: Repository<User>,
    @InjectRepository(Role) private repositoryRole: Repository<Role>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const userFound = await this.repositoryUser.findOne({
      where: { email: createUserDto.email },
    });

    if (userFound) {
      ErrorHandler.duplicatedEntry('User');
    }

    const roles = await this.repositoryRole.find({
      where: {
        id: In(
          createUserDto.roles.map((r) => (typeof r === 'number' ? r : r.id)),
        ),
      },
    });

    if (!roles || roles.length === 0) {
      ErrorHandler.roleRequired();
    }

    createUserDto.roles = roles;

    const userCreated: User = this.repositoryUser.create(createUserDto);

    return await this.repositoryUser.save(userCreated);
  }

  findAll() {
    return this.repositoryUser.find();
  }

  findOne(id: string) {
    return this.repositoryUser.findOne({
      where: { id },
    });
  }

  findByEmail(email: string) {
    return this.repositoryUser.findOne({
      where: { email },
    });
  }

  findByEmailOnlyPassword(email: string) {
    return this.repositoryUser.findOne({
      where: { email },
      select: ['id', 'password'],
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    const userFound = await this.repositoryUser.findOne({
      where: { id },
    });

    if (!userFound) {
      ErrorHandler.notFoundEntry('User');
    }

    return this.repositoryUser.remove(userFound);
  }

  saveUser(user: User) {
    return this.repositoryUser.save(user);
  }
}
