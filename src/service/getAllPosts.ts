import { contentful } from '@/lib/contentful'
import { dateFormatter } from '@/helpers/dateFormatter'

interface Post {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
}

type Posts = Array<Post>

export async function getAllPosts(): Promise<Posts> {
  const response = await contentful.getEntries({
    content_type: 'post',
  })

  const posts = response.items.map((post) => {
    return {
      slug: post.fields.slug as string,
      title: post.fields.title as string,
      excerpt: post.fields.excerpt as string,
      publishedAt: dateFormatter(post.fields.publishedAt as string),
    }
  })

  return posts
}
