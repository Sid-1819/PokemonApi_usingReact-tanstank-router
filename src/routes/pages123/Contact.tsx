import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pages123/Contact')({
  component: () => <div>Hello /pages/Contact!</div>
})