import type { FC } from 'hono/jsx';
import { TaskList } from './TaskList';
import { getTasks } from '@/controllers/tasks';

export const TaskSection: FC = async () => {
    const tasks = await getTasks();

    return (
        <section class="space-y-4">
            <h2 class="text-xl font-semibold">Tasks</h2>
            <TaskList tasks={tasks} />
        </section>
    );
};
