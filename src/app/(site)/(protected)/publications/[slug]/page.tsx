import { getPostBySlug } from '@/service/getPostBySlug'
import Link from 'next/link'

interface PublicationsProps {
  params: {
    slug: string
  }
}

export default async function Publication({ params }: PublicationsProps) {
  const post = await getPostBySlug(params.slug)

  return (
    <div className="text-gray-200 pt-10 pb-20 h-full overflow-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-thumb-rounded-full scrollbar-track-gray-900">
      <div className="max-w-7xl w-full mx-auto px-5">
        <div className="text-gray-400 text-sm flex items-center gap-2.5 truncate">
          <Link href="/" className="hover:text-gray-200 duration-500">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/publications"
            className="hover:text-gray-200 duration-500"
          >
            Publications
          </Link>
          <span>/</span>
          <span className="font-bold text-gray-200">{post.title}</span>
        </div>

        <div className="py-5">
          <time className="text-sm text-gray-300 font-medium">
            Published at: {post.publishedAt}
          </time>
          <h1 className="text-3xl font-bold text-sky-600">{post.title}</h1>

          <div className="max-w-4xl divide-y-[1px] divide-gray-800">
            <div className="py-5">{post.richTextContent}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
