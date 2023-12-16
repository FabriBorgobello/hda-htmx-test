import type { FC } from 'hono/jsx';

export const NavBar: FC = () => {
  return (
    <nav>
      <span>Logo</span>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </nav>
  );
};
