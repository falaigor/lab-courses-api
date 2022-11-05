import { Injectable } from '@nestjs/common';
import { Course } from '@prisma/client';

@Injectable()
export class CoursesService {
  create(data: Course) {
    return 'This action adds a new course';
  }

  findAll() {
    return `This action returns all courses`;
  }

  findOne(id: string) {
    return `This action returns a #${id} course`;
  }

  update(id: string, data: Course) {
    return `This action updates a #${id} course`;
  }

  remove(id: string) {
    return `This action removes a #${id} course`;
  }
}
