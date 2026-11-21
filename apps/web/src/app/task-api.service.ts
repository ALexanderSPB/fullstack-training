import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateTaskRequest, Task } from '@fullstack-project1/shared-types';

@Injectable({ providedIn: 'root' })
export class TasksApiService {
  private http = inject(HttpClient);

  getTasks() {
    return this.http.get<Task[]>('/api/tasks');
  }

  addTask(title: string) {
    const body: CreateTaskRequest = { title };
    return this.http.post<Task>('/api/tasks', body);
  }
}