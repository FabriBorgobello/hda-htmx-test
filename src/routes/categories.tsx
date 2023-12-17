import { getCategories } from '@/controllers/categories';
import { Hono } from 'hono';

export const categoriesRouter = new Hono();

categoriesRouter.get('/', async (c) => {
    const categories = await getCategories();
    return c.html(<h1>Categories</h1>);
});
