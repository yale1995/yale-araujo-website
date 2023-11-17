'use client'

import { EnvelopeSimpleOpen, Spinner } from '@/app/components/Icon'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

export function ButtonAuthUser() {
  const { status: sessionStatus } = useSession()
  const router = useRouter()

  const handleSignInUser = useCallback(async () => {
    if (sessionStatus === 'unauthenticated') {
      await signIn('google', { redirect: false, callbackUrl: '/publications' })
    }

    router.push('/publications')
  }, [router, sessionStatus])

  const isLoading = sessionStatus === 'loading'

  return (
    <button
      type="button"
      disabled={isLoading}
      onClick={handleSignInUser}
      className="flex gap-2 w-full items-center justify-center bg-gray-200 enabled:hover:bg-gray-50 disabled:bg-gray-200/40 duration-500 ring-1 ring-gray-900 py-2 px-4 rounded-lg text-gray-900 font-semibold text-lg"
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
