import Cover from './_sections/cover';
import SignUpForm from './_sections/form';
import { Locale } from '@/i18n-config';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
};

export default async function SignUpPage() {
  return (
    <div className='m-auto h-screen max-w-screen-2xl md:flex'>
      <div className='grow'>
        <Cover />
      </div>
      <div className='absolute bottom-0 left-0 right-0 top-0 m-auto h-96 w-96 md:static md:mx-8 md:flex'>
        <SignUpForm />
      </div>
    </div>
  );
}
