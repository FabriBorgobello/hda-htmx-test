import { Task, TaskStatus, TaskCategory } from './types';

export const TaskCategories: TaskCategory[] = [
  { id: '1', name: 'WORK', label: 'Work' },
  { id: '2', name: 'PERSONAL', label: 'Personal' },
  { id: '3', name: 'SHOPPING', label: 'Shopping' },
  { id: '4', name: 'OTHER', label: 'Other' },
];

export const TaskStatuses: TaskStatus[] = [
  { id: '1', name: 'OPEN', label: 'Open' },
  { id: '2', name: 'IN_PROGRESS', label: 'In progress' },
  { id: '3', name: 'DONE', label: 'Done' },
];

export const Tasks: Task[] = [
  {
    id: '1',
    title: 'Shopping groceries',
    description: 'Buy milk, bread, fruits',
    category: TaskCategories[2],
    status: TaskStatuses[0],
  },
  {
    id: '2',
    title: 'Finish the project',
    description: 'Finish the project on time',
    category: TaskCategories[0],
    status: TaskStatuses[1],
  },
  {
    id: '3',
    title: 'Call mom',
    description: 'Call mom and ask about her health',
    category: TaskCategories[1],
    status: TaskStatuses[2],
  },
  {
    id: '4',
    title: 'Pay bills',
    description: 'Pay electricity and water bills',
    category: TaskCategories[3],
    status: TaskStatuses[0],
  },
  {
    id: '5',
    title: 'Clean the room',
    description: 'Clean the room and wash the dishes',
    category: TaskCategories[1],
    status: TaskStatuses[1],
  },
  {
    id: '6',
    title: 'Buy a present',
    description: 'Buy a present for my friend',
    category: TaskCategories[2],
    status: TaskStatuses[2],
  },
  {
    id: '7',
    title: 'Finish the book',
    description: 'Finish the book I started reading',
    category: TaskCategories[3],
    status: TaskStatuses[0],
  },
  {
    id: '8',
    title: 'Learn React',
    description: 'Learn React and build a project',
    category: TaskCategories[0],
    status: TaskStatuses[1],
  },
  {
    id: '9',
    title: 'Go to the gym',
    description: 'Go to the gym and do some workout',
    category: TaskCategories[1],
    status: TaskStatuses[2],
  },
  {
    id: '10',
    title: 'Buy a new phone',
    description: 'Buy a new phone for my sister',
    category: TaskCategories[2],
    status: TaskStatuses[0],
  },
];
