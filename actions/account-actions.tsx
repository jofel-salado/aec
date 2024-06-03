'use server'

import { auth, signIn as authSignIn } from '@/auth'
import { Verification } from '@/models/verification'
import { requestVerification, store, verify } from '@/services/account-service'
import { FormState } from '@/types/form-state'
import { FormStatePayload } from '@/types/form-state-payload'
import camelize from 'camelize'
import { Account } from 'next-auth'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

export async function storeAccount(_prevState: any, formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')
  const response = await store({
    email: email?.toString() ?? '',
    password: password?.toString() ?? '',
  })
  if (response.ok) {
    revalidateTag('accounts')
    await authSignIn('credentials', { email, password, redirectTo: '/en' })
  } else {
    return await response.json()
  }
}

export async function signInAccount({
  email,
  password,
}: {
  email: string
  password: string
}) {
  await authSignIn('credentials', { email, password })
}

export async function requestVerificationAccount(): Promise<
  FormState<Verification>
> {
  const session = await auth()
  const request = await requestVerification({
    id: session?.user.account.id ?? '',
  })
  return camelize(await request.json())
}

export async function verifyAccount(_prevState: any, formData: FormData) {
  const session = await auth()
  const response = await verify({
    id: session?.user.account.id ?? '',
    verificationCode: formData.get('verificationCode')?.toString() ?? '',
  })
  if (response.ok) {
    revalidateTag('accounts')
    redirect('/en')
  } else {
    return await response.json()
  }
}
