import { Task } from '@/types';
import { FC } from 'hono/jsx';
import { TaskItem } from './TaskItem';

export const TaskList: FC<{ tasks: Task[] }> = ({ tasks }) => {
    if (tasks.length === 0) {
        return <TaskListEmptyState />;
    }

    return (
        <div
            id="task-list"
            class="flex flex-col space-y-4 rounded-lg bg-slate-50 p-4"
        >
            {tasks.map((task) => (
                <TaskItem task={task} />
            ))}
        </div>
    );
};

const TaskListEmptyState: FC = () => {
    return (
        <div class="flex flex-col items-center justify-center space-y-4">
            <h3 class="text-xl font-semibold">No tasks found</h3>
            <p class="text-gray-500">
                Try adding a new task or changing your filters.
            </p>
        </div>
    );
};
