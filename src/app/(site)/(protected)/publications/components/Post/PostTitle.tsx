interface PostTitleProps {
  title: string
}

export function PostTitle({ title }: PostTitleProps) {
  return <h3 className="text-2xl font-semibold text-sky-600">{title}</h3>
}
