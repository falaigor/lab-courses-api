import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { CoursesController } from 'src/controllers/courses/courses.controller';
import { CoursesService } from 'src/services/courses/courses.service';

@Module({
  imports: [PrismaModule.forRoot()],
  controllers: [CoursesController],
  providers: [CoursesService],
  exports: [CoursesService],
})
export class CoursesModule {}
