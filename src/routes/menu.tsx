import MenuPage from '@/pages/MenuPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/menu')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MenuPage />
}
