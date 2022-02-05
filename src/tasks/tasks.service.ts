import { taskModel, TaskStatus } from './tasks.model';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable() // injectable makes it a signleton (design pattern)
export class TasksService {
  private tasks: taskModel[] = [];

  getAllTasks(): taskModel[] {
    return this.tasks;
  }

  createSingleTask(title: string, description: string): taskModel {
    const task: taskModel = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);

    return task;
  }
}
