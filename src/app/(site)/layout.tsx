import Link from 'next/link'

import { ReactNode } from 'react'
import { Header } from './components/Header'
import { FilePdf, GithubLogo } from '../components/Icon'
import { Logo } from './components/Logo'
import { Menu } from './components/Header/Menu'

interface HomeLayoutProps {
  children: ReactNode
}

export default async function SiteLayout({ children }: HomeLayoutProps) {
  return (
    <div className="h-screen overflow-hidden">
      <Header>
        <Link href="/" className="hover:scale-105 duration-500">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <Link
            href="http://github.com/yale1995"
            target="_blank"
            className="flex items-center gap-2 text-gray-200 bg-slate-800 hover:bg-gray-700 duration-500 px-5 py-2 rounded-md font-semibold"
          >
            <GithubLogo weight="regular" className="text-gray-200 text-xl" />
            Github Profile
          </Link>
          <Link
            target="_blank"
            download="/files/cv-download.pdf"
            href="/files/cv-download.pdf"
            className="flex items-center gap-2 text-gray-200 bg-sky-800 hover:bg-sky-500 duration-500 px-5 py-2 rounded-md font-semibold group"
          >
            <FilePdf className="text-xl text-gray-200" />
            Resume PDF
          </Link>
        </div>

        <Menu />
      </Header>
      {children}
    </div>
  )
}
