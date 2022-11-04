import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'nestjs-prisma';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class UsersModule {}
