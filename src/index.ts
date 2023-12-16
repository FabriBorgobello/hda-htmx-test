import { serve } from '@hono/node-server';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';
import { Hono } from 'hono';
import { serveStatic } from '@hono/node-server/serve-static';

const app = new Hono();

// Middlewares
app.use('*', logger());
app.use('/api/*', cors());

// Static files
app.use('/static/*', serveStatic({ root: './' }));

// Routes
app.get('/', serveStatic({ path: './static/index.html' }));

serve(app, ({ port }) => {
  console.log(`Server is listening on http://localhost:${port}`);
});
