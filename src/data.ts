import { Task, Category, Status } from './types';

export const Statuses: Status[] = ['OPEN', 'IN_PROGRESS', 'DONE'];

export const Categories: Category[] = ['WORK', 'PERSONAL', 'SHOPPING', 'OTHER'];

export const Tasks: Task[] = [
    {
        id: 'uuid-1',
        title: 'Shopping groceries',
        description: 'Buy milk, bread, fruits',
        category: 'SHOPPING',
        status: 'OPEN',
    },
    {
        id: 'uuid-2',
        title: 'Call mom',
        description: 'Call mom and ask her about her health',
        category: 'PERSONAL',
        status: 'DONE',
    },
    {
        id: 'uuid-3',
        title: 'Complete the project',
        description: 'Complete the project and submit it',
        category: 'WORK',
        status: 'OPEN',
    },
    {
        id: 'uuid-4',
        title: 'Buy a new phone',
        description: 'Buy a new phone with good camera',
        category: 'SHOPPING',
        status: 'OPEN',
    },
    {
        id: 'uuid-5',
        title: 'Pay electricity bill',
        description: 'Pay electricity bill and get the receipt',
        category: 'PERSONAL',
        status: 'DONE',
    },
    {
        id: 'uuid-6',
        title: 'Buy a new laptop',
        description: 'Buy a new laptop with high memory',
        category: 'SHOPPING',
        status: 'OPEN',
    },
    {
        id: 'uuid-7',
        title: 'Complete the assignment',
        description: 'Complete the assignment and submit it',
        category: 'WORK',
        status: 'OPEN',
    },
    {
        id: 'uuid-8',
        title: 'Buy a new car',
        description: 'Buy a new car with good mileage',
        category: 'SHOPPING',
        status: 'OPEN',
    },
    {
        id: 'uuid-9',
        title: 'Buy a new house',
        description: 'Buy a new house with good ventilation',
        category: 'SHOPPING',
        status: 'OPEN',
    },
    {
        id: 'uuid-10',
        title: 'Buy a new bike',
        description: 'Buy a new bike with good mileage',
        category: 'SHOPPING',
        status: 'OPEN',
    },
    {
        id: 'uuid-11',
        title: 'Buy a new phone',
        description: 'Buy a new phone with good camera',
        category: 'SHOPPING',
        status: 'IN_PROGRESS',
    },
    {
        id: 'uuid-12',
        title: 'Pay electricity bill',
        description: 'Pay electricity bill and get the receipt',
        category: 'PERSONAL',
        status: 'OPEN',
    },
];
