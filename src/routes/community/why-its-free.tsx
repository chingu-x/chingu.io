import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/community/why-its-free')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/community/why-its-free"!</div>
}
