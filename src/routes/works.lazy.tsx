import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/works')({
  component: WorksComponent,
})

function WorksComponent() {
  return (
    <div className="p-2">
      <h3>Works!</h3>
    </div>
  )
}
