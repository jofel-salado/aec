'use client';

import Dict, { HomeDict } from '@/models/dict';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function SignUpSamples() {
  const t = useTranslations('Home')

  return (
    <Card className='p-8'>
      <CardHeader>
        <h1 className='text-2xl'>{t('signUp')}</h1>
      </CardHeader>
      <CardBody>
        <div className='flex gap-4'>
          <Link href='/en/auth/sign-up'>{t('sample', {number: 1})}</Link>
          <Link href='/en/auth/sign-up/sample-2'>{t('sample', {number: 2})}</Link>
        </div>
      </CardBody>
    </Card>
  );
}
