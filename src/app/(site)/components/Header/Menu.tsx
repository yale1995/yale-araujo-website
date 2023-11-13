'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'

import { List, GithubLogo, FilePdf } from '@/app/components/Icon'

export function Menu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="md:hidden">
        <List className="text-gray-200 text-2xl" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-gray-400 text-gray-700 font-medium py-2 px-4 rounded-md translate-y-5 flex flex-col gap-2 outline-0 border-0 shadow-none">
          <DropdownMenu.Item className="outline-0 border-0 shadow-none">
            <Link
              href="http://github.com/yale1995"
              target="_blank"
              className="flex items-center gap-1"
            >
              <GithubLogo weight="bold" size={18} />
              Github Profile
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="outline-0 border-0 shadow-none">
            <Link
              target="_blank"
              download="/files/cv-download.pdf"
              href="/files/cv-download.pdf"
              className="flex items-center gap-1"
            >
              <FilePdf weight="bold" size={18} />
              Resume PDF
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
