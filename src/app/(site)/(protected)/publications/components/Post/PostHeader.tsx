interface PostHeaderProps {
  publishedAt: string
  author: string
}

export function PostHeader({ author, publishedAt }: PostHeaderProps) {
  return (
    <header className="flex items-center gap-2 text-sm text-gray-200 py-2">
      <time>{publishedAt}</time>-<span>Published by: {author}</span>
    </header>
  )
}
