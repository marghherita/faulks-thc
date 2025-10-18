import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/band')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className=''>Hello "/about"!</div>
}
