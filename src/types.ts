/* TASKS */
export interface TaskType {
  id: number;
  title: string;
  description: string;
  category: TaskCategoryType;
  status: TaskStatusType;
}

/* TASK STATUS */
export interface TaskStatusType {
  id: number;
  name: 'OPEN' | 'IN_PROGRESS' | 'DONE';
  label: string;
}

/* TASK CATEGORY */
export interface TaskCategoryType {
  id: number;
  name: 'WORK' | 'PERSONAL' | 'SHOPPING' | 'OTHER';
  label: string;
}
