import type { FC } from 'hono/jsx';
import { NavBar } from '@/jsx/partials/NavBar';

export const Layout: FC = ({ children }) => {
  return (
    <html>
      <body>
        <NavBar />
        <div>{children}</div>
      </body>
    </html>
  );
};
