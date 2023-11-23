import Link from "next/link"
import {getPosts} from '@/lib/posts'

export default function Page(){
  const posts = getPosts()
  return(
    <main>
<h1>This is the blogs page! Cool!</h1>
<p>My blog posts</p>
<ul>
  {posts.map(post => {
    return (
      <li key={post.slug}>
        <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
      </li>
    )
  })}
  </ul>
    </main>
  )
}

