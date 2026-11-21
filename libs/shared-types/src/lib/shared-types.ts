export function sharedTypes(): string {
  return 'shared-types';
}

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

export interface CreateTaskRequest {
  title: string;
}