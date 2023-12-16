import { TaskStatus } from '@/types';
import type { FC } from 'hono/jsx';

export const FilterItem: FC<{ status: TaskStatus }> = ({ status }) => {
    return (
        <button class="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            {status}
        </button>
    );
};
