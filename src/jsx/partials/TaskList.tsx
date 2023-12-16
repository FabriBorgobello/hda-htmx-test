import type { FC } from 'hono/jsx';
import { TaskItem } from './TaskItem';
import { Task } from '@/types';

export const TaskList: FC<{ tasks: Task[] }> = ({ tasks }) => {
    return (
        <section class="space-y-4" id="task-list">
            <h2 class="text-xl font-semibold">Tasks</h2>
            {tasks.length === 0 && <p class="text-gray-400">No tasks found</p>}
            {tasks.map((task) => (
                <TaskItem task={task} />
            ))}
        </section>
    );
};
