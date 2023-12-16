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
        </head>
        {children}
      </body>
    </html>
  );
};
