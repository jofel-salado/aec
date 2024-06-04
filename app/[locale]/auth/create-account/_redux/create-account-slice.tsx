import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Dict from '@/models/dict'
import { FormState } from '@/types/form-state'
import { Account } from '@/models/account'
import { ErrorType } from '@/models/text-field'
import { CreateAccountState } from './create-account-state'

export const initialState: CreateAccountState = {
  username: {},
  firstName: {},
  lastName: {},
  dateOfBirth: {},
  phoneNumber: {},
  address: {},
}

export const createAccountSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    usernameChanged(state: CreateAccountState) {
      return {
        ...state,
        username: {
          ...state.username,
          errorType: ErrorType.NONE,
        },
      }
    },
    firstNameChanged(state: CreateAccountState) {
      return {
        ...state,
        firstName: {
          ...state.firstName,
          errorType: ErrorType.NONE,
        },
      }
    },
    lastNameChanged(state: CreateAccountState) {
      return {
        ...state,
        lastName: {
          ...state.lastName,
          errorType: ErrorType.NONE,
        },
      }
    },
    dateOfBirthChanged(state: CreateAccountState) {
      return {
        ...state,
        dateOfBirth: {
          ...state.dateOfBirth,
          errorType: ErrorType.NONE,
        },
      }
    },
    phoneNumberChanged(state: CreateAccountState) {
      return {
        ...state,
        phoneNumber: {
          ...state.phoneNumber,
          errorType: ErrorType.NONE,
        },
      }
    },
    addressChanged(state: CreateAccountState) {
      return {
        ...state,
        address: {
          ...state.address,
          errorType: ErrorType.NONE,
        },
      }
    },
    // passwordChanged(state: CreateAccountState, action: PayloadAction<string>) {
    //   return {
    //     ...state,
    //     password: {
    //       ...state.password,
    //       value: action.payload,
    //     },
    //   }
    // },
    // passwordEyeToggled(state: CreateAccountState) {
    //   return {
    //     ...state,
    //     password: {
    //       ...state.password,
    //       obscure: !state.password.obscure,
    //     },
    //   }
    // },
    // confirmPasswordChanged(
    //   state: CreateAccountState,
    //   action: PayloadAction<string>,
    // ) {
    //   return {
    //     ...state,
    //     confirmPassword: {
    //       ...state.confirmPassword,
    //       value: action.payload,
    //     },
    //   }
    // },
    // confirmPasswordEyeToggled(state: CreateAccountState) {
    //   return {
    //     ...state,
    //     confirmPassword: {
    //       ...state.confirmPassword,
    //       obscure: !state.confirmPassword.obscure,
    //     },
    //   }
    // },

    formStateChanged(
      state: CreateAccountState,
      action: PayloadAction<FormState<Account>>,
    ) {
      let emailErrorType = ErrorType.NONE
      if (action.payload.errors?.email) {
        emailErrorType = ErrorType.SERVER
      }
      return {
        ...state,
        email: {
          errorType: emailErrorType,
        },
      }
    },
  },
})

export const {
  usernameChanged,
  firstNameChanged,
  lastNameChanged,
  dateOfBirthChanged,
  phoneNumberChanged,
  addressChanged,
  formStateChanged,
} = createAccountSlice.actions

export default createAccountSlice.reducer
