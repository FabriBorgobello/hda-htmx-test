import type { FC } from 'hono/jsx';
import { TaskItemSkeleton } from './TaskItem';

export const TaskSection: FC = () => {
    return (
        <section class="space-y-4">
            <h2 class="text-xl font-semibold">Tasks</h2>
            <div
                id="task-list"
                class="flex flex-col space-y-4"
                hx-trigger="load"
                hx-get="/api/tasks"
            >
                {Array.from(Array(5)).map((_, i) => (
                    <TaskItemSkeleton />
                ))}
            </div>
        </section>
    );
};
