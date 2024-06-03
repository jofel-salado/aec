import { configureStore } from '@reduxjs/toolkit';
import signUpSlice from './app/[locale]/auth/sign-up/_redux/sign-up-slice';
import verifySlice from './app/[locale]/auth/verify/_redux/verify-slice';

export const store = configureStore({
  reducer: {
    signUpState: signUpSlice,
    verifyState: verifySlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type GetState = typeof store.getState;
export type RootState = ReturnType<typeof store.getState>;
