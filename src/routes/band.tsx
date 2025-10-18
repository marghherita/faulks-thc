import { createFileRoute } from '@tanstack/react-router'
import BandPage from '@/pages/BandPage'

export const Route = createFileRoute('/band')({
  component: RouteComponent,
})

function RouteComponent() {
  return <BandPage />
}
