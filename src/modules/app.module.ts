import { Module } from '@nestjs/common';
import { APP_GUARD, Reflector } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [],

  providers: [
    {
      provide: APP_GUARD,
      useFactory: (ref) => new JwtAuthGuard(ref),
      inject: [Reflector],
    },
  ],
})
export class AppModule {}
