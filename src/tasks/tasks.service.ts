import { TasksRepository } from './task.repository';
import { CreateTaskDto } from './dto/create-task.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable() // injectable makes it a signleton (design pattern)
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private taskRepository: TasksRepository,
  ) {}
  // private tasks: taskModel[] = [];
  // getAllTasks(): taskModel[] {
  //   return this.tasks;
  // }
  // getTasksWithFilters(filterDto: GetTasksFilterDto): taskModel[] {
  //   const { status, search } = filterDto; //Destructuring the Data type object
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //     return tasks;
  //   }
  // }
  // createSingleTask(createTaskDto: CreateTaskDto): taskModel {
  //   const { title, description } = createTaskDto; //ECMA 6 destructuring syntax
  //   const task: taskModel = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // getTaskById(id: string): taskModel {
  //   const found = this.tasks.find((task) => task.id === id);
  //   if (!found) {
  //     //.... throw the errror
  //     throw new NotFoundException(`Task with ID "${id}" not found`);
  //     //added custom message whilee throwing the error
  //   }
  //   return found;
  // }
  // deleteTask(id: string): void {
  //   // const index = this.tasks.findIndex((task) => task.id === id);
  //   // this.tasks.splice(index, 1);
  //   const found = this.getTaskById(id); //this will throw error as well if there is no id
  //   this.tasks = this.tasks.filter((tasks) => tasks.id !== found.id);
  // }
  // updateTaskStatus(id: string, status: TaskStatus): taskModel {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}
