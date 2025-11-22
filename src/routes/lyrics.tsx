import AlertPage from '@/pages/AlertPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/lyrics')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AlertPage />
}
