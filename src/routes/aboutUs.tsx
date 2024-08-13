import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/aboutUs')({
  component: () => <div>Hello /aboutUs!</div>
})