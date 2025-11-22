import { createFileRoute } from '@tanstack/react-router'
import AlertPage from '@/pages/AlertPage'

export const Route = createFileRoute('/alert')({
    component: RouteComponent,
})

function RouteComponent() {
    return <AlertPage />
}
