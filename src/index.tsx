import { serve } from '@hono/node-server';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';
import { Hono } from 'hono';
import { serveStatic } from '@hono/node-server/serve-static';
import { jsxRenderer } from 'hono/jsx-renderer';
import { Layout } from '@/jsx/pages/Layout';
import { Home } from '@/jsx/pages/Home';
import { tasksRouter } from './routes/tasks';

const app = new Hono();

// Middlewares
app.use('*', logger());
app.use('/api/*', cors());

// Static files
app.use('/static/*', serveStatic({ root: './' }));

// JSX Renderer
app.get(
    '*',
    jsxRenderer(({ children }) => <Layout>{children}</Layout>)
);

// Routes
app.get('/', (c) => c.render(<Home />));
app.route('/api/tasks', tasksRouter);

serve(app, ({ port }) => {
    console.log(`Server is listening on http://localhost:${port}`);
});
