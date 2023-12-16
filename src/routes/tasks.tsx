import { createTask, deleteTask, getTaskById, getTasks, updateTask } from '@/controllers/tasks';
import { TaskList } from '@/jsx/partials/TaskList';
import { TaskInput, TaskUpdate } from '@/types';
import { Hono } from 'hono';

export const tasksRouter = new Hono();

tasksRouter.get('/', async (c) => {
  const tasks = await getTasks();
  return c.json(tasks);
});

tasksRouter.get('/:id', async (c) => {
  const id = c.req.param('id');
  const task = await getTaskById(id);
  if (!task) {
    return c.json({ message: 'Task not found' }, 404);
  } else {
    return c.json(task);
  }
});

tasksRouter.post('/', async (c) => {
  const body = await c.req.parseBody<TaskInput>();
  const newTask = await createTask(body);
  const tasks = await getTasks();
  return c.html(<TaskList tasks={[newTask, ...tasks]} />);
});

tasksRouter.put('/:id', async (c) => {
  const id = c.req.param('id');
  const body = await c.req.json<TaskUpdate>();
  const task = await updateTask(id, body);
  if (!task) {
    return c.json({ message: 'Task not found' }, 404);
  } else {
    return c.json(task);
  }
});

tasksRouter.delete('/:id', async (c) => {
  const id = c.req.param('id');
  const task = await deleteTask(id);
  if (!task) {
    return c.json({ message: 'Task not found' }, 404);
  } else {
    return c.json({}, 204);
  }
});
