import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Class } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ClassesService {
  constructor(private prisma: PrismaService) {}

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

  async getBySlug(slug: string) {
    return await this.prisma.class.findUnique({
      where: {
        slug,
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
