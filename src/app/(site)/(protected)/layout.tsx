import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { Fragment, ReactNode } from 'react'

interface ProtectedRoutesProps {
  children: ReactNode
}

export default async function ProtectedRouter({
  children,
}: ProtectedRoutesProps) {
  const session = await getServerSession(authOptions)
  console.log(session)
  if (!session) redirect('/')

  return <Fragment>{children}</Fragment>
}
