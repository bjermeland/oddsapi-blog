import Container from '@/components/container'
import PostList from '@/components/postlist'

export default function Post({ posts }) {
  return (
    <>
      {posts && (
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
            {posts
              .filter((post) => post.mainImage)
              .slice(0, 2)
              .map((post) => (
                <PostList key={post._id} post={post} aspect="landscape" preloadImage={true} />
              ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts
              .filter((post) => post.mainImage)
              .slice(2, 14)
              .map((post) => (
                <PostList key={post._id} post={post} aspect="square" />
              ))}
          </div>
        </Container>
      )}
    </>
  )
}
