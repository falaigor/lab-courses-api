import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Class, PrismaClient } from '@prisma/client';

@Injectable()
export class ClassesService {
  constructor(private prisma: PrismaClient) {}

  async create(data: Class) {
    try {
      return await this.prisma.class.create({
        data,
      });
    } catch (error) {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getAll() {
    return await this.prisma.class.findMany();
  }

  async getById(id: string) {
    return await this.prisma.class.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: Class) {
    const classExists = await this.prisma.class.findUnique({
      where: {
        id,
      },
    });

    if (!classExists) {
      throw new Error('class does not exists!');
    }

    try {
      return await this.prisma.class.update({
        data,
        where: {
          id,
        },
      });
    } catch (err) {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete(id: string) {
    return await this.prisma.class.delete({
      where: {
        id,
      },
    });
  }
}
