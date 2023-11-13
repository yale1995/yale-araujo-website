import { contentful } from '@/lib/contentful'
import { dateFormatter } from '@/helpers/dateFormatter'
import { Document } from '@contentful/rich-text-types'
import { richTextFormatter } from '@/helpers/richTextFormatter'
import { ReactNode } from 'react'

interface Post {
  title: string
  richTextContent: ReactNode
  publishedAt: string
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const response = await contentful.getEntries({
    content_type: 'post',
    'fields.slug': slug,
  })

  const post = {
    publishedAt: dateFormatter(response.items[0].fields.publishedAt as string),
    title: response.items[0].fields.title as string,
    richTextContent: richTextFormatter(
      response.items[0].fields.textContent as Document,
    ),
  }

  return post
}
