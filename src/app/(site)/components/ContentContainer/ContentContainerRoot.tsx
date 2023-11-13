import { FunctionComponent, ReactNode } from 'react'

interface ContentContainerRootProps {
  children: ReactNode
}

export const ContentContainerRoot: FunctionComponent<
  ContentContainerRootProps
> = ({ children }) => {
  return <div className="max-w-4xl mx-auto py-10">{children}</div>
}
