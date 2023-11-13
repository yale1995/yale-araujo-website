/* eslint-disable jsx-a11y/alt-text */
import { Document, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { ReactNode } from 'react'
import NextImage from 'next/image'

import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'

interface CustomRichTexComponent {
  children: ReactNode
}

interface CustomRichTextImageComponent {
  src: string
  description: string
}

export function richTextFormatter(unformattedRichText: Document) {
  const Heading = ({ children }: CustomRichTexComponent) => (
    <h3 className="text-xl font-semibold">{children}</h3>
  )

  const Text = ({ children }: CustomRichTexComponent) => (
    <p className="text-md text-justify py-2">{children}</p>
  )

  const Bold = ({ children }: CustomRichTexComponent) => (
    <strong className="font-bold text-md">{children}</strong>
  )

  const Image = ({ src, description }: CustomRichTextImageComponent) => (
    <NextImage
      src={src}
      alt={description}
      width={600}
      height={400}
      className="mx-auto py-4"
    />
  )

  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => <Bold>{text}</Bold>,
    },

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,

      [BLOCKS.HEADING_3]: (node, children) => <Heading>{children}</Heading>,

      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { url } = node.data.target.fields.file
        const { description } = node.data.target.fields
        return <Image src={`http:${url}`} description="" />
      },
    },
  }

  return documentToReactComponents(unformattedRichText, options)
}
