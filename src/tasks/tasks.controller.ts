import { CreateTaskDto } from './dto/create-task.dto';
import { taskModel, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

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

  @Delete('/:id')
  removeTask(@Param('id') id: string): void {
    this.tasksService.deleteTask(id);
  }

  @Patch('/:id/status')
  updateStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): taskModel {
    return this.tasksService.updateTaskStatus(id, status);
  }
}
