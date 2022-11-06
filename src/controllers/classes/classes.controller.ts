import { Class } from '@prisma/client';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClassesService } from 'src/services/classes/classes.service';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  create(@Body() data: Class) {
    return this.classesService.create(data);
  }

  @Get()
  getAll() {
    return this.classesService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.classesService.getById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Class) {
    return this.classesService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.classesService.delete(id);
  }
}
