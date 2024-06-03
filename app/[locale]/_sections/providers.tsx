'use client';

import { store } from '@/store';
import { NextUIProvider } from '@nextui-org/react';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <NextUIProvider validationBehavior='native'>{children}</NextUIProvider>
    </Provider>
  );
}
