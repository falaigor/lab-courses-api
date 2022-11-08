import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from 'src/auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { ClassesModule } from './classes/classes.module';

@Module({
  imports: [AuthModule, UsersModule, CoursesModule, ClassesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
