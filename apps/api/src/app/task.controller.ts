import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskRequest, Task } from '@fullstack-project1/shared-types';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Post()
  create(@Body() body: CreateTaskRequest): Promise<Task> {
    return this.tasksService.create(body.title);
  }
}
