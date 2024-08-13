import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pages123/Blog')({
  component: () => <div>Hello /_pages123/Blog!</div>
})