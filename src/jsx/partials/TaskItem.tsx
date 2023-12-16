import { Task } from '@/types';
import type { FC } from 'hono/jsx';

export const TaskItem: FC<{ task: Task }> = ({ task }) => {
    return (
        <button class="flex w-full items-center justify-between space-x-4 rounded-md border-2 border-gray-100 p-4 text-sm transition-all hover:bg-slate-50">
            <div class="flex items-center space-x-2">{task.title}</div>
            <div class="rounded-full bg-slate-950 px-2 py-1 text-xs text-white">
                {task.category}
            </div>
        </button>
    );
};
