import { Injectable } from '@nestjs/common';
import { Task } from '@fullstack-project1/shared-types';

@Injectable()
export class TasksService {
  // Хранилище в памяти: данные сбрасываются при перезапуске сервера.
  private tasks: Task[] = [{ id: 1, title: 'Изучить Nx', done: false }];
  private nextId = 2;

  findAll(): Task[] {
    return this.tasks;
  }

  create(title: string): Task {
    const task: Task = { id: this.nextId++, title, done: false };
    this.tasks.push(task);
    return task;
  }
}
