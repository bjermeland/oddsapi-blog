import PostPage from './default'

import { getAllPostsSlugs, getPostBySlug } from '@/lib/sanity/client'

export async function generateStaticParams() {
  return await getAllPostsSlugs()
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  return { title: post.title, description: post.excerpt }
}

export default async function PostDefault({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  return <PostPage post={post} />
}
