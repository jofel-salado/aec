import { Metadata } from 'next'
import Form from './_sections/form'
import { auth } from '@/auth'
import { requestVerification } from '@/services/account-service'
import { requestVerificationAccount } from '@/actions/account-actions'
import Providers from './_sections/providers'

export const metadata: Metadata = {
  title: 'Verify',
}

export default async function Page() {
  const verification = await requestVerificationAccount()

  return (
    <div className='flex h-screen'>
      <div className='m-auto'>
        <Providers
          state={{
            verificationCodeTimestamp: verification.verificationCodeTimestamp,
          }}
        >
          <Form />
        </Providers>
      </div>
    </div>
  )
}
