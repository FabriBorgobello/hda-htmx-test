import { Categories } from '@/data';
import { Task } from '@/types';
import type { FC } from 'hono/jsx';

export const TaskItem: FC<{ task: Task }> = ({ task }) => {
    return (
        <div
            id={`task-${task.id}`}
            class="flex w-full items-center justify-between space-x-4 rounded-md border-2 border-gray-100 p-4 text-sm transition-all hover:bg-slate-50"
        >
            <div class="flex flex-col items-start space-y-1">
                <span>{task.title}</span>
                <span class="ml-1 text-xs text-gray-500">
                    ({task.description})
                </span>
            </div>
            <div class="flex items-center">
                <div class="relative cursor-pointer rounded-full bg-slate-950 px-2 py-1 text-xs text-white hover:bg-slate-900">
                    <span
                        onclick="
                        this.nextElementSibling.classList.toggle('hidden');
                        setTimeout(() => {
                            this.nextElementSibling.classList.toggle('translate-y-6');
                            this.nextElementSibling.classList.toggle('opacity-0');
                        }, 50);
                        "
                    >
                        {task.category}
                    </span>
                    <div
                        class="dropdown-menu absolute left-full top-full z-10 hidden -translate-x-1/2 translate-y-6 transform opacity-0 transition-all duration-75"
                        onmouseleave="this.classList.toggle('hidden');this.classList.toggle('translate-y-6');this.classList.toggle('opacity-0');"
                    >
                        <ul class="mt-1 flex flex-col rounded border border-gray-100 bg-slate-50 text-black shadow-xl">
                            {Categories.map((category) => {
                                if (category === task.category) return;
                                return (
                                    <CategoryItem
                                        id={task.id}
                                        category={category}
                                    />
                                );
                            })}
                        </ul>
                    </div>
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

const CategoryItem: FC<{ id: string; category: Task['category'] }> = ({
    id,
    category,
}) => {
    return (
        <li class="hover:bg-gray-100">
            <button
                class="w-full px-6 py-4 text-left"
                hx-put={`/api/tasks/${id}`}
                hx-swap="outerHTML"
                hx-target={`#task-${id}`}
                name="category"
                value={category}
            >
                {category.slice(0, 1).toUpperCase() +
                    category.slice(1).toLowerCase()}
            </button>
        </li>
    );
};
