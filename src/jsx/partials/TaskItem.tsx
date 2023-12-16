import { Task } from '@/types';
import type { FC } from 'hono/jsx';

export const TaskItem: FC<{ task: Task }> = ({ task }) => {
    return (
        <div class="flex w-full items-center justify-between space-x-4 rounded-md border-2 border-gray-100 p-4 text-sm transition-all hover:bg-slate-50">
            <div class="flex flex-col items-start space-y-1">
                <span>{task.title}</span>
                <span class="ml-1 text-xs text-gray-500">
                    ({task.description})
                </span>
            </div>
            <div class="flex items-center">
                <div class="rounded-full bg-slate-950 px-2 py-1 text-xs text-white">
                    {task.category}
                </div>
                <button
                    hx-delete={`/api/tasks/${task.id}`}
                    hx-confirm="Are you sure you want to delete this task?"
                    hx-swap="outerHTML"
                    hx-target="#task-list"
                    class="ml-4 rounded bg-red-500 px-3 py-1 text-xs text-white hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};
