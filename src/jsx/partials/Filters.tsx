import type { FC } from 'hono/jsx';
import { FilterItem } from './FilterItem';
import { TaskStatus } from '@/data';

export const Filters: FC = () => {
  return (
    <section class="flex flex-col gap-4">
      <h2 class="text-xl font-semibold">Filter Tasks</h2>
      <div class="grid gap-2">
        {TaskStatus.map((status) => (
          <FilterItem status={status} />
        ))}
      </div>
    </section>
  );
};