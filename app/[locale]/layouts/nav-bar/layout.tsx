import { ReactNode } from 'react';
import NavBar from './_sections/nav-bar';

export default function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: {
    lang: string;
  };
}) {
  return (
    <div className='flex h-screen flex-col'>
      <div>
        <NavBar />
      </div>
      <div className='m-auto w-full max-w-7xl grow bg-slate-700'>
        {children}
      </div>
    </div>
  );
}
