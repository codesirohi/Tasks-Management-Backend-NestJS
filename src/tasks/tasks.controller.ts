import { Task } from './task.entity';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getTasks(@Query() filterDto: GetTasksFilterDto): taskModel[] {
  //   //if we have filters defined get tasks with filter otherwise return all of them
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTasksWithFilters(filterDto);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }
  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    //any async returns promise
    return this.tasksService.getTaskById(id);
  }
  // @Get('/:id') //colon signifiesits a path parameter
  // getTaskById(@Param('id') id: string): taskModel {
  //   return this.tasksService.getTaskById(id);
  // }

  // @Post('add')
  // createTask(@Body() createTaskDto: CreateTaskDto): taskModel {
  //   // console.log('title', title);
  //   // console.log('description', description);
  //   return this.tasksService.createSingleTask(createTaskDto);
  // }

  // @Delete('/:id')
  // removeTask(@Param('id') id: string): void {
  //   this.tasksService.deleteTask(id);
  // }

  // @Patch('/:id/status')
  // updateStatus(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  // ): taskModel {
  //   const { status } = updateTaskStatusDto;
  //   return this.tasksService.updateTaskStatus(id, status);
  // }
}
