import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/community/who-runs-chingu')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/community/who-runs-chingu"!</div>
}
