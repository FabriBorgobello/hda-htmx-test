import type { FC } from 'hono/jsx';
import { Header } from '@/jsx/partials/Header';
import { TaskSection } from '@/jsx/partials/TaskSection';
import { FilterSection } from '@/jsx/partials/FilterSection';

export const Home: FC = () => {
    return (
        <main class="container mx-auto max-w-5xl space-y-6 p-4 md:p-6">
            <Header />
            <TaskSection />
            <FilterSection />
        </main>
    );
};
