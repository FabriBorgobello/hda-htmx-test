import { Categories } from '@/data';
import { Task } from '@/types';
import type { FC } from 'hono/jsx';

export const TaskItem: FC<{ task: Task }> = ({ task }) => {
    return (
        <div
            id={`task-${task.id}`}
            class="flex w-full flex-col items-center justify-between gap-y-5 space-x-4 rounded-md border-2 border-gray-100 bg-white p-4 text-sm transition-all hover:bg-slate-50 md:flex-row "
        >
            <div class="flex flex-col items-center space-y-1 text-center sm:text-left md:items-start">
                <span>{task.title}</span>
                <span class="text-xs text-gray-500 md:ml-1 ">
                    ({task.description})
                </span>
            </div>
            <div class="flex flex-col items-center gap-x-4 gap-y-2 sm:flex-row">
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
                    hx-target={`#task-${task.id}`}
                    class="rounded bg-red-500 px-3 py-1 text-xs text-white hover:bg-red-600"
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
