/* TASKS */
export interface Task {
  id: string;
  title: string;
  description: string;
  category: TaskCategory;
  status: TaskStatus;
}

export type TaskInput = Omit<Task, 'id'>;
export type TaskUpdate = Partial<Task>;

/* TASK STATUS */
export interface TaskStatus {
  id: string;
  name: 'OPEN' | 'IN_PROGRESS' | 'DONE';
  label: string;
}

/* TASK CATEGORY */
export interface TaskCategory {
  id: string;
  name: 'WORK' | 'PERSONAL' | 'SHOPPING' | 'OTHER';
  label: string;
}
