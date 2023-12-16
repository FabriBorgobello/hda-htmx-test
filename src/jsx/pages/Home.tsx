import type { FC } from 'hono/jsx';
import { TaskList } from '@/jsx/partials/TaskList';
import { Header } from '@/jsx/partials/Header';
import { Filters } from '@/jsx/partials/Filters';
import { Tasks } from '@/data';

export const Home: FC = () => {
    return (
        <main class="container mx-auto max-w-5xl space-y-6 p-4 md:p-6">
            <Header />
            <TaskList tasks={Tasks} />
            <Filters />
        </main>
    );
};
