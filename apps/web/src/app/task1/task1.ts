import { Component, OnInit, inject, signal } from '@angular/core';
import { TasksApiService } from '../task-api.service';
import { Task } from '@fullstack-project1/shared-types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task1',
  imports: [CommonModule],
  templateUrl: './task1.html',
  styleUrl: './task1.css',
})
export class Task1 implements OnInit {

  private tasksApiService = inject(TasksApiService);

  protected tasks = signal<Task[]>([]);

  ngOnInit() {
    this.tasksApiService.getTasks().subscribe((tasks) => this.tasks.set(tasks));
  }

  protected addTask() {
    const title = `Новый таск ${this.tasks().length + 1}`;
    this.tasksApiService.addTask(title).subscribe((task) => {
      this.tasks.update((list) => [...list, task]);
    });
  }
}
