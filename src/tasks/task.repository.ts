import { CreateTaskDto } from './dto/create-task.dto';
import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entity';

@EntityRepository(Task) //Task is entity here
export class TasksRepository extends Repository<Task> {}
