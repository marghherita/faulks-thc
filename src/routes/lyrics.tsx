import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/lyrics')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/lyrics"!</div>
}
