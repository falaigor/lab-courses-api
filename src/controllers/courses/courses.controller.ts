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
import { Course } from '@prisma/client';
import { CoursesService } from 'src/services/courses/courses.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() data: Course): Promise<Course> {
    return this.coursesService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll(): Promise<Course[]> {
    return this.coursesService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getById(@Param('id') id: string): Promise<Course> {
    return this.coursesService.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Course): Promise<Course> {
    return this.coursesService.update(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coursesService.delete(id);
  }
}
