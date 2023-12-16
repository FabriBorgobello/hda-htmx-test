import { Task } from '@/types';
import type { FC } from 'hono/jsx';

export const TaskItem: FC<{ task: Task }> = ({ task }) => {
    return (
        <div
            class="bg-card text-card-foreground rounded-lg border shadow-sm"
            data-v0-t="card"
        >
            <div class="flex items-center justify-between p-6">
                <div class="flex items-center gap-2">
                    <button
                        type="button"
                        role="checkbox"
                        aria-checked="false"
                        data-state="unchecked"
                        value="on"
                        class="border-primary ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground peer h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="task-3"
                    ></button>
                    <label
                        class="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="task-3"
                    >
                        {task.title}
                    </label>
                </div>
                <div
                    class="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex w-fit items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                    color="blue"
                >
                    {task.category}
                </div>
            </div>
        </div>
    );
};
