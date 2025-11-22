import AlertPage from '@/pages/AlertPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/menu')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AlertPage />
}
