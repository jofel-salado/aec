'use client';

import Dict, { HomeDict } from '@/models/dict';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function LayoutSamples() {
  const t = useTranslations('Home')

  return (
    <Card className='p-8'>
      <CardHeader>
        <h1 className='text-2xl'>{t('layout')}</h1>
      </CardHeader>
      <CardBody>
        <div className='flex gap-4'>
          <Link href='/en/layouts/nav-bar'>{t('sample', {number: 1})}</Link>
        </div>
      </CardBody>
    </Card>
  );
}
