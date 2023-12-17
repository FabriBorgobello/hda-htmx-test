import { Tasks } from '@/data';
import { Task, TaskInput, TaskUpdate } from '@/types';
import { uuid } from '@/utils/uuid';

export async function getTasks(
    query: {
        status?: Task['status'];
        category?: Task['category'];
    } = {}
) {
    const { status, category } = query;

    if (status && category) {
        return Tasks.filter(
            (task) => task.status === status && task.category === category
        );
    }
    if (status) {
        return Tasks.filter((task) => task.status === status);
    }
    if (category) {
        return Tasks.filter((task) => task.category === category);
    }
    return Tasks;
}

export async function getTaskById(id: Task['id']) {
    return Tasks.find((task) => task.id === id);
}

export async function createTask(task: TaskInput) {
    const newTask: Task = { ...task, id: uuid(), status: 'OPEN' as const };
    Tasks.unshift(newTask);
    return Tasks;
}

export async function updateTask(id: Task['id'], task: TaskUpdate) {
    const taskIndex = Tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) return undefined;
    const updatedTask = { ...Tasks[taskIndex], ...task };
    Tasks[taskIndex] = updatedTask;
    return updatedTask;
}

export async function deleteTask(id: Task['id']) {
    const taskIndex = Tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) return undefined;
    Tasks.splice(taskIndex, 1);
    return Tasks;
}
