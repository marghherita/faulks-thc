import FaulksPage from '@/pages/FaulksPage';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/faulks')({
  component: RouteComponent,
})

function RouteComponent() {
  return <FaulksPage />;
}
