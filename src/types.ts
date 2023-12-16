/* TASKS */
export interface Task {
    id: string;
    title: string;
    description: string;
    category: 'WORK' | 'PERSONAL' | 'SHOPPING' | 'OTHER';
    status: 'OPEN' | 'IN_PROGRESS' | 'DONE';
}

export type TaskInput = Omit<Task, 'id' | 'status'>;
export type TaskUpdate = Partial<Omit<Task, 'id'>>;

export type TaskCategory = Task['category'];
export type TaskStatus = Task['status'];
