import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Course) {
    try {
      const course = await this.prisma.course.create({
        data,
      });

      return course;
    } catch (error) {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getAll() {
    return await this.prisma.course.findMany();
  }

  async getById(id: string) {
    return await this.prisma.course.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: Course) {
    const courseExists = await this.prisma.course.findUnique({
      where: {
        id,
      },
    });

    if (!courseExists) {
      throw new Error('course does not exists!');
    }

    try {
      const user = await this.prisma.course.update({
        data,
        where: {
          id,
        },
      });

      return user;
    } catch (error) {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  delete(id: string) {
    return this.prisma.course.delete({
      where: {
        id,
      },
    });
  }
}
