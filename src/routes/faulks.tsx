import AlertPage from '@/pages/AlertPage';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/faulks')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AlertPage />;
}
