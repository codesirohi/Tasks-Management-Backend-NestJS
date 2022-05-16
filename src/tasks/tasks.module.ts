import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TasksRepository } from './task.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TasksRepository])], //forFeature in task module and forRoot in app module
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
