import { db } from '@/controllers/tasks';
import { CreationBar } from '@/jsx/partials/CreationBar';
import { TaskItem } from '@/jsx/partials/TaskItem';
import { TaskList } from '@/jsx/partials/TaskList';
import { Toast } from '@/jsx/partials/Toast';
import { TaskInput, TaskUpdate } from '@/types';
import { Hono } from 'hono';

export const tasksRouter = new Hono();

tasksRouter.get('/', async (c) => {
    const query = c.req.query();
    const tasks = await db.getTasks(query);
    return c.html(<TaskList tasks={tasks} />);
});

tasksRouter.get('/:id', async (c) => {
    const id = c.req.param('id');
    const task = await db.getTaskById(id);
    if (!task) {
        return c.json({ message: 'Task not found' }, 404);
    } else {
        return c.json(task);
    }
});

tasksRouter.post('/', async (c) => {
    const body = await c.req.parseBody<TaskInput>();
    const task = await db.createTask(body);
    return c.html(
        <>
            <TaskItem task={task} />
            <Toast message="Task created" title="Success" type="success" />
            <CreationBar />
        </>
    );
});

tasksRouter.put('/:id', async (c) => {
    const id = c.req.param('id');
    const body = await c.req.parseBody<TaskUpdate>();
    const task = await db.updateTask(id, body);
    if (!task) return c.json({ message: 'Task not found' }, 404);
    return c.html(<TaskItem task={task} />);
});

tasksRouter.delete('/:id', async (c) => {
    const id = c.req.param('id');
    const tasks = await db.deleteTask(id);
    if (!tasks) return c.json({ message: 'Task not found' }, 404);
    // HTMX deletes the element if the response is 200 + empty body
    // Toast is not part of the proper response because it's using hx-swap-oob
    // see: https://htmx.org/attributes/hx-delete/
    return c.html(
        <Toast message="Task deleted" title="Success" type="success" />,
        200
    );
});
