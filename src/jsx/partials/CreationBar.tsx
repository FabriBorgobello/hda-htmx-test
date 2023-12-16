import { TaskCategories } from '@/data';
import type { FC } from 'hono/jsx';
export const CreationBar: FC = () => {
    return (
        <form
            class="grid gap-4"
            hx-post="/api/tasks"
            hx-swap="outerHTML"
            hx-target="#task-list"
        >
            <input
                class="rounded-md border-2 border-gray-100 px-3 py-2 text-sm"
                name="title"
                placeholder="Add a task title"
            />
            <input
                class="rounded-md border-2 border-gray-100 px-3 py-2 text-sm"
                name="description"
                placeholder="Add a task description"
            />
            <select
                name="category"
                class="rounded-md border-2 border-gray-100 px-3 py-2 text-sm"
            >
                {TaskCategories.map((category) => (
                    <option value={category}>{category}</option>
                ))}
            </select>
            <button
                class="rounded-md bg-slate-50 px-3 py-2 text-sm text-black transition-all hover:bg-slate-900 hover:text-white
        active:scale-95 active:bg-slate-800 active:text-white"
                type="submit"
            >
                Add Task
            </button>
        </form>
    );
};
