import { getStatuses } from '@/controllers/statuses';
import { Hono } from 'hono';

export const statusesRouter = new Hono();

statusesRouter.get('/', async (c) => {
    const statuses = await getStatuses();
    return c.html(<h1>Statuses</h1>);
});
