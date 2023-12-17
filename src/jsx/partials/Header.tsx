import type { FC } from 'hono/jsx';
import { CreationBar } from './CreationBar';

export const Header: FC = () => {
    return (
        <>
            <h1 class="text-2xl font-semibold">To-Do List</h1>
            <section class="flex flex-col gap-4 rounded-lg bg-slate-50 p-4">
                <h2 class="text-xl font-semibold">Create a new task</h2>
                <CreationBar />
            </section>
        </>
    );
};
