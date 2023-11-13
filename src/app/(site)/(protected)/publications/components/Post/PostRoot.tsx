import { ReactNode } from 'react'

interface PostRootProps {
  children: ReactNode
}

export function PostRoot({ children }: PostRootProps) {
  return <div className="py-5">{children}</div>
}
