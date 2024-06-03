import Form from './_sections/form';
import { Locale } from '@/i18n-config';
import { Metadata } from 'next';
import { auth } from '@/auth';

export const metadata: Metadata = {
  title: 'Sign Up',
};

export default async function SignUpPage() {
  return (
    <div className='flex h-screen'>
      <div className='m-auto'>
        <Form />
      </div>
    </div>
  );
}
