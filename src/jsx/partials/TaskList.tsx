import { Tasks } from '@/data';
import type { FC } from 'hono/jsx';
import { TaskItem } from './TaskItem';

export const TaskList: FC = () => {
  return (
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Tasks</h2>
      {Tasks.map((task) => (
        <TaskItem task={task} />
      ))}
    </section>
  );
};
