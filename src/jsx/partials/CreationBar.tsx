import { Categories } from '@/data';
import type { FC } from 'hono/jsx';
export const CreationBar: FC = () => {
    return (
        <form
            class="grid gap-4"
            hx-post="/api/tasks"
            hx-swap="outerHTML"
            hx-target="#task-list"
            hx-indicator="#spinner"
            hx-ext="disable-element"
            hx-disable-element="#add-task-button"
        >
            <input
                class="rounded-md border-2 border-gray-100 px-3 py-2 text-sm"
                name="title"
                placeholder="Add a task title"
                required
            />
            <input
                class="rounded-md border-2 border-gray-100 px-3 py-2 text-sm"
                name="description"
                placeholder="Add a task description"
                required
            />
            <select
                name="category"
                required
                class="rounded-md border-2 border-gray-100 px-3 py-2 text-sm"
            >
                {Categories.map((category) => (
                    <option value={category}>{category}</option>
                ))}
            </select>
            <button
                class="flex justify-center gap-2 rounded-md bg-slate-50 px-3 py-2 text-sm text-black transition-all hover:bg-slate-900 hover:text-white active:scale-95 active:bg-slate-800 active:text-white disabled:cursor-not-allowed disabled:bg-gray-100 disabled:hover:bg-gray-100 disabled:hover:text-black disabled:active:scale-100 disabled:active:bg-gray-500 disabled:active:text-black"
                type="submit"
                id="add-task-button"
            >
                <span>Add Task</span>
                <img
                    id="spinner"
                    height="20"
                    width="20"
                    class="htmx-indicator hidden"
                    src="./static/spinner.svg"
                />
            </button>
        </form>
    );
};
