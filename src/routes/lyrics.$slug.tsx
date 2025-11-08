import LyricsDetailPage from '@/pages/LyricsDetailPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/lyrics/$slug')({
    component: RouteComponent,
})

function RouteComponent() {
    const { slug } = Route.useParams()
    return <LyricsDetailPage slug={slug} />
}