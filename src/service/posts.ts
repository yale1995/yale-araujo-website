import { dateFormatter } from '@/helpers/dateFormatter'
import { richTextFormatter } from '@/helpers/richTextFormatter'
import { contentful } from '@/lib/contentful'
import { Document } from '@contentful/rich-text-types'
import { ReactNode } from 'react'

interface Post {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  richTextContent: ReactNode
}

type PostsMethods = {
  getAll: () => Promise<Omit<Post, 'richTextContent'>[]>
  getBySlug: (slug: string) => Promise<Omit<Post, 'excerpt' | 'slug'>>
}

export function Posts(): PostsMethods {
  const getAll = async () => {
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

  const getBySlug = async (slug: string) => {
    const response = await contentful.getEntries({
      content_type: 'post',
      'fields.slug': slug,
    })

    const post = {
      publishedAt: dateFormatter(
        response.items[0].fields.publishedAt as string,
      ),
      title: response.items[0].fields.title as string,
      richTextContent: richTextFormatter(
        response.items[0].fields.textContent as Document,
      ),
    }

    return post
  }

  return { getAll, getBySlug }
}
