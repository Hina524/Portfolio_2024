import { createFileRoute } from '@tanstack/react-router'
import '../globals.css'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="space">
      <h1>hina</h1>
    </div>
  )
}
