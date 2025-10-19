import TracklistPage from '@/pages/TracklistPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tracklist')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TracklistPage />; 
}
