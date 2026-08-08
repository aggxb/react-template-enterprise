import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/second')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-surface mt-5 p-4">This is the second page route</div>
  );
}
