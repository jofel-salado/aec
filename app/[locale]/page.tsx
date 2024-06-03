import SignUpSamples from './_sections/sign-up-samples';
import { Locale } from '@/i18n-config';
import LayoutSamples from './_sections/layout-samples';

export default async function Page() {

  return (
    <div className='flex w-full justify-center gap-4 py-16'>
      <div className='card w-full max-w-md'>
        <LayoutSamples/>
      </div>
      <div className='card w-full max-w-md'>
        <SignUpSamples />
      </div>
    </div>
  );
}
