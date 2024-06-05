import { Metadata } from 'next'
import Form from './_sections/form'

export const metadata: Metadata = {
  title: 'Forgot Password',
}

export default async function ForgotPassswordPage() {
  return (
    <div className='flex h-screen'>
      <div className='m-auto'>
        <Form />
      </div>
    </div>
  )
}
