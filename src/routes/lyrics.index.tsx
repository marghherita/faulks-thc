import LyricsPage from '@/pages/LyricsPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/lyrics/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LyricsPage />
}
