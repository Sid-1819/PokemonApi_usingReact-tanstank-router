import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pages123/$id')({
  component: () => <div>Hello /_pages123/$id!</div>
})