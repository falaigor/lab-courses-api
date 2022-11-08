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

  getAll() {
    return `This action returns all classes`;
  }

  getById(id: string) {
    return `This action returns a #${id} class`;
  }

  update(id: string, data: Class) {
    return `This action updates a #${id} class`;
  }

  delete(id: string) {
    return `This action removes a #${id} class`;
  }
}
