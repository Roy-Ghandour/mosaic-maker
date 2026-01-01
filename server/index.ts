import { Hono } from 'hono';

const app = new Hono();

app.get('/', c => {
  return c.text('Hello Hono! This is a test deployment.');
});

export default app;
