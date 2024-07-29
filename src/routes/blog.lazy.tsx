import { createFileRoute } from '@tanstack/react-router'
import Blog from '../posts/blog.json'
import BlogCard from '../components/blog-card.tsx'
import '../globals.css'

export const Route = createFileRoute('/blog')({
  component: BlogComponent,
})

/* type Props = {
  title: string,
  date: string,
} */

function BlogCards(/* blogs: Array<Props> */) {
  const blogElements = Blog.map((blog) => (
    <BlogCard title={blog.title} date={blog.date}/>
  ))

  return (
    <div>
      {blogElements}
    </div> // 変数だけ返すのダメらしい
  )
}

function BlogComponent() {
  return (
    <div className="space">
      <div className= "pages">
        <BlogCards />
      </div>
    </div>
  )
}
