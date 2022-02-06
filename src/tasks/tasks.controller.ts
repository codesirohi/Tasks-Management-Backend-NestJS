import { CreateTaskDto } from './dto/create-task.dto';
import { taskModel } from './tasks.model';
import { TasksService } from './tasks.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('all')
  getTasks(): taskModel[] {
    return this.tasksService.getAllTasks();
  }

  @Post('add')
  createTask(@Body() createTaskDto: CreateTaskDto): taskModel {
    // console.log('title', title);
    // console.log('description', description);
    return this.tasksService.createSingleTask(createTaskDto);
  }
}
