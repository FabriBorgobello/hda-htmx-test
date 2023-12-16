import { TaskType } from '@/types';
import type { FC } from 'hono/jsx';

export const TaskItem: FC<{ task: TaskType }> = ({ task }) => {
  return (
    <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
      <div class="p-6 flex justify-between items-center">
        <div class="flex gap-2 items-center">
          <button
            type="button"
            role="checkbox"
            aria-checked="false"
            data-state="unchecked"
            value="on"
            class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            id="task-3"
          ></button>
          <label
            class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
            for="task-3"
          >
            {task.title}
          </label>
        </div>
        <div
          class="inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
          color="blue"
        >
          {task.category}
        </div>
      </div>
    </div>
  );
};
