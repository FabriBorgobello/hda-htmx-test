import type { FC } from 'hono/jsx';
import { SearchBar } from './SearchBar';

export const Header: FC = () => {
  return (
    <section class="flex flex-col gap-4">
      <h1 class="text-2xl font-semibold">To-Do List</h1>
      <SearchBar />
    </section>
  );
};
