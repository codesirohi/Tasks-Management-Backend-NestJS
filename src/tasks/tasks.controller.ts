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
  Query,
} from '@nestjs/common';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() filterDto: GetTasksFilterDto): taskModel[] {
    //if we have filters defined get tasks with filter otherwise return all of them
    if (Object.keys(filterDto).length) {
      return this.tasksService.getTasksWithFilters(filterDto);
    } else {
      return this.tasksService.getAllTasks();
    }
  }

  // getTasksWithFilters(filterDto: GetTasksFilterDto): taskModel[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search))
  //         return true;

  //       return false;
  //     });

  //     return tasks;
  //   }
  // }

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
