import { createFileRoute } from '@tanstack/react-router'
import '../globals.css'

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})

function AboutComponent() {
  return (
    <div className="p-2">
      <div className="title">Profile</div>
      <p>
        名前:小西姫奈 / KONISHI Hina
        大学:会津大学学部2年
        所属サークル:Zli,カンフー部会長,軽音部
      </p>
      <div className="title">スキル</div>
      <div className="title">趣味</div>
      <div className="title">経歴</div>
    </div>
  )
}
