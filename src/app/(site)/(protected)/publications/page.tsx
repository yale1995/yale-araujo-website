import Link from 'next/link'

import { Post } from './components/Post'
import { Posts } from '@/service/posts'

export default async function Publications() {
  const posts = await Posts().getAll()

  return (
    <div className="text-gray-200 py-10 h-full overflow-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-thumb-rounded-full scrollbar-track-gray-900">
      <div className="max-w-7xl w-full mx-auto px-5">
        <div className="text-gray-400 text-sm flex gap-2.5">
          <Link href="/" className="hover:text-gray-200 duration-500">
            Home
          </Link>
          <span>/</span>
          <span className="font-bold text-gray-200">Publications</span>
        </div>

        <div className="py-5">
          <h1 className="text-3xl font-bold">Publications</h1>

          <div className="max-w-4xl divide-y-[1px] divide-gray-800">
            {posts.map((post) => (
              <Link key={post.slug} href={`/publications/${post.slug}`}>
                <Post.Root>
                  <Post.Header
                    author="Yale Araújo"
                    publishedAt={post.publishedAt}
                  />

                  <Post.Title title={post.title} />
                  <Post.Summary content={post.excerpt} />
                </Post.Root>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
