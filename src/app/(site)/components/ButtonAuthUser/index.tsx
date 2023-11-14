'use client'

import { EnvelopeSimpleOpen, Spinner } from '@/app/components/Icon'
import { signIn, useSession } from 'next-auth/react'
import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

export function ButtonAuthUser() {
  const { status: sessionStatus } = useSession()
  const router = useRouter()

  const signInUser = useCallback(async () => {
    await signIn('google', {
      redirect: false,
      callbackUrl: '/publications',
    })
    router.push('/publications')
  }, [router])

  const isLoading = sessionStatus === 'loading'

  return (
    <button
      type="button"
      onClick={signInUser}
      className="flex gap-2 w-full items-center justify-center bg-gray-200 hover:bg-gray-50 duration-500 ring-1 ring-gray-900 py-2 px-4 rounded-lg text-gray-900 font-semibold text-lg"
    >
      {isLoading ? (
        <Spinner className="text-gray-900 text-2xl animate-spin" />
      ) : (
        <EnvelopeSimpleOpen className="text-gray-900 text-2xl" />
      )}
      Publications
    </button>
  )
}
