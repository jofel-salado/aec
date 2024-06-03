'use client'

import { ReactNode, useEffect } from 'react'
import { VerifyState } from '../_redux/verify-state'
import { screenCreated } from '../_redux/verify-slice'
import { useAppDispatch } from '@/hooks/hooks'

export default function Providers({
  children,
  state,
}: {
  children: ReactNode
  state: VerifyState
}) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(screenCreated(state))
  }, [])

  return <>{children}</>
}
