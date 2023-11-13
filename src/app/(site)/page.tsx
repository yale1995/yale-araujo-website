import Link from 'next/link'

import { Code } from '../components/Icon'
import { AutoCarouselProjects } from './components/AutoCarouselProjects'
import { ContentContainer } from '@/app/(site)/components/ContentContainer'
import { ButtonAuthUser } from './components/ButtonAuthUser'

export default async function Home() {
  return (
    <div className="px-5">
      <ContentContainer.Root>
        <h1 className="text-3xl md:text-4xl balance text-center font-semibold text-gray-200">
          Hello, I am Yale Araújo. I talk about coding{' '}
          <span className="text-sky-600">
            and you are welcome to my website 🔥
          </span>
        </h1>

        <p className="text-gray-200 balance text-center text-base py-5 font-semibold">
          I am a Frontend Software Engineer based in Brazil with more than 4
          years experienced. Here I am sharing projects, technical content and
          ideas. Below you can see the most recents applications developed by
          me.
        </p>

        <ContentContainer.Action>
          <Link
            href="/"
            className="flex gap-2 w-full items-center justify-center bg-sky-800 hover:bg-sky-500 duration-500 py-2 md:py-3 px-3 md:px-4 rounded-lg text-gray-200 font-semibold text-lg"
          >
            <Code className="text-gray-200 text-2xl" />
            Projects
          </Link>

          <ButtonAuthUser />
        </ContentContainer.Action>
      </ContentContainer.Root>

      <div className="pt-10 md:pt-16">
        <AutoCarouselProjects />
      </div>
    </div>
  )
}
