import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { VerifyState } from './verify-state'
import { ErrorType } from '@/models/text-field'
import { FormState } from '@/types/form-state'
import { Verification } from '@/models/verification'

export const initialState: VerifyState = {}

export const verifySlice = createSlice({
  name: 'verify',
  initialState,
  reducers: {
    screenCreated: (state: VerifyState, action: PayloadAction<VerifyState>) => {
      return {
        ...action.payload,
      }
    },
    verificationCodeChanged: (state: VerifyState) => {
      return {
        ...state,
        verificationCode: {
          errorType: ErrorType.NONE,
        },
      }
    },
    formStateChanged(
      state: VerifyState,
      action: PayloadAction<FormState<Verification>>,
    ) {
      let verificationCodeErrorType = ErrorType.NONE
      if (action.payload.message) {
        verificationCodeErrorType = ErrorType.SERVER
      }
      return {
        ...state,
        verificationCode: {
          errorType: verificationCodeErrorType,
        },
      }
    },
    resendCodeStateChanged(
      state: VerifyState,
      action: PayloadAction<FormState<Verification>>,
    ) {
      return {
        ...state,
        verificationCodeTimestamp: action.payload.verificationCodeTimestamp,
      }
    },
    timerTicked: (state: VerifyState) => {
      const verificationCodeTimestamp = state.verificationCodeTimestamp
      if (verificationCodeTimestamp) {
        const date = new Date(verificationCodeTimestamp)
        var remainingTime = date.getTime() - new Date().getTime()
        if (remainingTime <= 0) {
          return {
            ...state,
            remainingDate: undefined,
          }
        } else {
          var seconds = Math.floor(remainingTime / 1000)
          var minutes = Math.floor(seconds / 60)
          minutes %= 60
          seconds %= 60
          return {
            ...state,
            remainingDate: new Date(
              date.getTime() - new Date().getTime(),
            ).toLocaleTimeString([], { minute: '2-digit', second: '2-digit' }),
          }
        }
      }
    },
  },
})

export const {
  timerTicked,
  screenCreated,
  formStateChanged,
  verificationCodeChanged,
  resendCodeStateChanged,
} = verifySlice.actions

export default verifySlice.reducer
