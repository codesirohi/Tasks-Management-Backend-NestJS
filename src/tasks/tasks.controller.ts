import { CreateTaskDto } from './dto/create-task.dto';
import { taskModel } from './tasks.model';
import { TasksService } from './tasks.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('all')
  getTasks(): taskModel[] {
    return this.tasksService.getAllTasks();
  }

  @Get('/:id') //colon signifiesits a path parameter
  getTaskById(@Param('id') id: string): taskModel {
    return this.tasksService.getTaskById(id);
  }

  @Post('add')
  createTask(@Body() createTaskDto: CreateTaskDto): taskModel {
    // console.log('title', title);
    // console.log('description', description);
    return this.tasksService.createSingleTask(createTaskDto);
  }

  @Post('delete/:id')
  removeTask(@Param('id') id: string) {
    this.tasksService.deleteTask(id);
  }
}
