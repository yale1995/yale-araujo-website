interface PostSummaryProps {
  content: string
}
export function PostSummary({ content }: PostSummaryProps) {
  return (
    <p className="text-base font-medium text-gray-200 truncate">{content}</p>
  )
}
