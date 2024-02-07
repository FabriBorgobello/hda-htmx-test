import { Tasks } from '@/data';
import { Task, TaskInput, TaskUpdate } from '@/types';
import { uuid } from '@/utils/uuid';

class Database {
    private tasks: Task[];

    constructor() {
        this.tasks = Tasks;
    }

    public async getTasks(query = {}) {
        const { status, category } = query as {
            status?: Task['status'];
            category?: Task['category'];
        };

        return this.tasks.filter(
            (task) =>
                (!status || task.status === status) &&
                (!category || task.category === category)
        );
    }

    public async getTaskById(id: Task['id']) {
        return this.tasks.find((task) => task.id === id);
    }

    public async createTask(taskInput: TaskInput) {
        const newTask = { ...taskInput, id: uuid(), status: 'OPEN' as const };
        this.tasks.push(newTask);
        return newTask;
    }

    public async updateTask(id: Task['id'], taskUpdate: TaskUpdate) {
        const taskIndex = this.tasks.findIndex((task) => task.id === id);
        if (taskIndex !== -1) {
            this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...taskUpdate };
            return this.tasks[taskIndex];
        }
    }

    public async deleteTask(id: Task['id']) {
        const taskIndex = this.tasks.findIndex((task) => task.id === id);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
            return true;
        }
        return false;
    }
}

export const db = new Database();
