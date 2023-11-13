import { FunctionComponent, ReactNode } from 'react'

interface ContentContainerActionProps {
  children: ReactNode
}

export const ContentContainerAction: FunctionComponent<
  ContentContainerActionProps
> = ({ children }) => {
  return <div className="max-w-md mx-auto flex gap-4">{children}</div>
}
