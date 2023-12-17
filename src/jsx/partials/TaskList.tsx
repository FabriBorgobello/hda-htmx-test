import { Task } from '@/types';
import { FC } from 'hono/jsx';
import { TaskItem } from './TaskItem';

export const TaskList: FC<{ tasks: Task[] }> = ({ tasks }) => {
    return (
        <div id="task-list" class="flex flex-col space-y-4">
            {tasks.map((task) => (
                <TaskItem task={task} />
            ))}
        </div>
    );
};
