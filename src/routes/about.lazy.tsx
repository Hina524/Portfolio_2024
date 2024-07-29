import { createFileRoute } from '@tanstack/react-router'
import '../globals.css'

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})

function AboutComponent() {
  return (
    <div className="space">
      <div className= "pages">
      <div className="title">Profile</div>
      <p>
        名前:小西姫奈 / KONISHI Hina<br/>
        大学:会津大学学部2年<br/>
        所属サークル:Zli,カンフー部副主将,軽音部
      </p>
      <div className="title">スキル</div>
      <div className="title">趣味</div>
      <div className="title">経歴</div>
      </div>
    </div>
  )
}
