import { SignUpState } from './sign-up-state';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Dict from '@/models/dict';
import { FormState } from '@/types/form-state';
import { Account } from '@/models/account';
import { ErrorType } from '@/models/text-field';

export const initialState: SignUpState = {
  email: {},
  password: {
    obscure: true,
  },
  confirmPassword: {
    obscure: true,
  },
};

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    emailChanged(state: SignUpState) {
      return {
        ...state,
        email: {
          ...state.password,
          errorType: ErrorType.NONE,
        },
      };
    },
    passwordChanged(state: SignUpState, action: PayloadAction<string>) {
      return {
        ...state,
        password: {
          ...state.password,
          value: action.payload,
        },
      };
    },
    passwordEyeToggled(state: SignUpState) {
      return {
        ...state,
        password: {
          ...state.password,
          obscure: !state.password.obscure,
        },
      };
    },
    confirmPasswordChanged(state: SignUpState, action: PayloadAction<string>) {
      return {
        ...state,
        confirmPassword: {
          ...state.confirmPassword,
          value: action.payload,
        },
      };
    },
    confirmPasswordEyeToggled(state: SignUpState) {
      return {
        ...state,
        confirmPassword: {
          ...state.confirmPassword,
          obscure: !state.confirmPassword.obscure,
        },
      };
    },
    formStateChanged(
      state: SignUpState,
      action: PayloadAction<FormState<Account>>,
    ) {
      let emailErrorType = ErrorType.NONE;
      if (action.payload.errors?.email) {
        emailErrorType = ErrorType.SERVER;
      }
      return {
        ...state,
        email: {
          errorType: emailErrorType,
        },
      };
    },
  },
});

export const {
  emailChanged,
  passwordChanged,
  passwordEyeToggled,
  confirmPasswordChanged,
  confirmPasswordEyeToggled,
  formStateChanged,
} = signUpSlice.actions;

export default signUpSlice.reducer;
