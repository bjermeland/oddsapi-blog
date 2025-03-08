import { getAllPosts } from '@/lib/sanity/client'
import HomePage from './home'

export default async function IndexPage() {
  const posts = await getAllPosts()
  return <HomePage posts={posts} />
}

// export const revalidate = 60;
