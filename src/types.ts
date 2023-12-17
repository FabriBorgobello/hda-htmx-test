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

export type Category = Task['category'];
export type Status = Task['status'];

export interface Filter<T = string> {
    label: string;
    value: string;
    options: T[];
}
