import { Injectable } from '@nestjs/common';
import { Class } from '@prisma/client';

@Injectable()
export class ClassesService {
  create(data: Class) {
    return 'This action adds a new class';
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
