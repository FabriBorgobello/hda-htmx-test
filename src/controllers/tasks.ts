import { Tasks } from '@/data';
import { Task, TaskInput, TaskUpdate } from '@/types';
import { uuid } from '@/utils/uuid';

export async function getTasks() {
  return Tasks;
}

export async function getTaskById(id: Task['id']) {
  return Tasks.find((t) => t.id === id);
}

export async function createTask(task: TaskInput) {
  const newTask: Task = { ...task, id: uuid() };
  Tasks.push(newTask);
  return newTask;
}

export async function updateTask(id: Task['id'], task: TaskUpdate) {
  const index = Tasks.findIndex((t) => t.id === id);
  if (index === -1) return undefined;
  Tasks[index] = { ...Tasks[index], ...task };
  return Tasks[index];
}

export async function deleteTask(id: Task['id']) {
  const index = Tasks.findIndex((t) => t.id === id);
  if (index === -1) return undefined;
  Tasks.splice(index, 1);
}
