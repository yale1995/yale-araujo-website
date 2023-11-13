import { ReactNode } from 'react'

interface HeaderProps {
  children: ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <header>
      <div className="flex items-center justify-between max-w-7xl px-4 mx-auto py-5 border-b-[1px] border-gray-800">
        {children}
      </div>
    </header>
  )
}
