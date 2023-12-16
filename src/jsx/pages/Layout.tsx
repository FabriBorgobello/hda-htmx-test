import type { FC } from 'hono/jsx';

export const Layout: FC = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>My App</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <script
            src="https://unpkg.com/htmx.org@1.9.9"
            integrity="sha384-QFjmbokDn2DjBjq+fM+8LUIVrAgqcNW2s0PjAxHETgRn9l4fvX31ZxDxvwQnyMOX"
            crossorigin="anonymous"
          ></script>
        </head>
        {children}
      </body>
    </html>
  );
};
