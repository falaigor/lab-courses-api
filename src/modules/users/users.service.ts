import { User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: User) {
    try {
      const user = await this.prisma.user.create({
        data,
      });

      return user;
    } catch (error) {
      if (error?.code === 'P2002') {
        throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
      }

      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: User) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!userExists) {
      throw new Error('user does not exists!');
    }

    return await this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!userExists) {
      throw new Error('user does not exists!');
    }

    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
