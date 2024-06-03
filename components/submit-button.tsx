'use client'

import { Button, ButtonProps } from '@nextui-org/react'
import { ReactNode } from 'react'
import { useFormStatus } from 'react-dom'

export function SubmitButton({
  children,
  onClick,
  isDisabled,
}: { children: ReactNode } & ButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button
      type='submit'
      fullWidth={true}
      isLoading={pending}
      onClick={onClick}
      isDisabled={isDisabled}
    >
      {children}
    </Button>
  )
}
