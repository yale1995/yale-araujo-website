'use client'

import { EnvelopeSimpleOpen, Spinner } from '@/app/components/Icon'
import { signIn, useSession } from 'next-auth/react'

export function ButtonAuthUser() {
  const { status: sessionStatus } = useSession()

  const signInUser = () => {
    signIn('google', {
      redirect: true,
      callbackUrl: '/publications',
    })
  }

  return (
    <button
      onClick={signInUser}
      className="flex gap-2 w-full items-center justify-center bg-gray-200 hover:bg-gray-50 duration-500 ring-1 ring-gray-900 py-2 px-4 rounded-lg text-gray-900 font-semibold text-lg"
    >
      {sessionStatus === 'loading' ? (
        <Spinner className="text-gray-900 text-2xl animate-spin" />
      ) : (
        <EnvelopeSimpleOpen className="text-gray-900 text-2xl" />
      )}
      Publications
    </button>
  )
}
