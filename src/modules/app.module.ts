import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from 'src/auth/auth.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [AuthModule, UsersModule, CoursesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
