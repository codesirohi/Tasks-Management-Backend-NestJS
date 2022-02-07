import { CreateTaskDto } from './dto/create-task.dto';
import { taskModel, TaskStatus } from './tasks.model';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable() // injectable makes it a signleton (design pattern)
export class TasksService {
  private tasks: taskModel[] = [];

  getAllTasks(): taskModel[] {
    return this.tasks;
  }

  createSingleTask(createTaskDto: CreateTaskDto): taskModel {
    const { title, description } = createTaskDto; //ECMA 6 destructuring syntax
    const task: taskModel = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);

    return task;
  }

  getTaskById(id: string): taskModel {
    return this.tasks.find((task) => task.id === id);
  }

  deleteTask(id: string): void {
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks.splice(index, 1);
  }

  updateTaskStatus(id: string, status: TaskStatus): taskModel {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}
