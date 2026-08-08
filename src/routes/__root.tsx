import type { QueryClient } from '@tanstack/react-query';
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <div>
      <div className="container">
        <h1 className="text-2xl font-bold text-content">React Template SPA</h1>
        <div className="flex gap-2">
          <Link to="/">First</Link>
          <Link to="/second">Second</Link>
        </div>

        <div>
          <Outlet />
        </div>
      </div>

      <TanStackRouterDevtools />
      <ReactQueryDevtools position="right" />
    </div>
  ),
});
