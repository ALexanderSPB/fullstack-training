import { Injectable } from '@nestjs/common';
import { Task } from '@fullstack-project1/shared-types';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Task[]> {
    return this.prisma.task.findMany({ orderBy: { id: 'asc' } });
  }

  create(title: string): Promise<Task> {
    return this.prisma.task.create({ data: { title } });
  }
}
