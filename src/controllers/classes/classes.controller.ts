import { Class } from '@prisma/client';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ClassesService } from 'src/services/classes/classes.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() data: Class) {
    return this.classesService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.classesService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.classesService.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Class) {
    return this.classesService.update(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.classesService.delete(id);
  }
}
