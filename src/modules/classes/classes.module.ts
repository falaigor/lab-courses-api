import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { ClassesService } from 'src/services/classes/classes.service';
import { ClassesController } from 'src/controllers/classes/classes.controller';

@Module({
  imports: [PrismaModule.forRoot()],
  controllers: [ClassesController],
  providers: [ClassesService],
})
export class ClassesModule {}
