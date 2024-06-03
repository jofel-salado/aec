'use client'

import {
  requestVerificationAccount,
  verifyAccount,
} from '@/actions/account-actions'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import {
  formStateChanged,
  resendCodeStateChanged,
  timerTicked,
  verificationCodeChanged,
} from '../_redux/verify-slice'
import { FormStatePayload } from '@/types/form-state-payload'
import { Verification } from 'next/dist/lib/metadata/types/metadata-types'
import { ErrorType } from '@/models/text-field'
import { SubmitButton } from '@/components/submit-button'

export default function Form() {
  const t = useTranslations('Verify')
  const [formState, formAction] = useFormState(
    verifyAccount,
    {},
  ) as FormStatePayload<Verification>
  const [resendCodeState, resendCodeAction] = useFormState(
    requestVerificationAccount,
    {},
  ) as FormStatePayload<Verification>
  const dispatch = useAppDispatch()

  const state = useAppSelector((rootState) => rootState.verifyState)

  useEffect(() => {
    dispatch(formStateChanged(formState))
  }, [formState])

  useEffect(() => {
    dispatch(resendCodeStateChanged(resendCodeState))
  }, [resendCodeState])

  useEffect(() => {
    const timer = setTimeout(function () {
      dispatch(timerTicked())
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [state.remainingDate, state.verificationCodeTimestamp])

  return (
    <Card className='w-[400px] p-12'>
      <CardHeader>
        <h1>{t('verify')}</h1>
      </CardHeader>
      <form action={formAction}>
        <CardBody>
          <Input
            type='text'
            name='verificationCode'
            placeholder={t('verificationCode')}
            onChange={() => dispatch(verificationCodeChanged())}
            isInvalid={state.verificationCode?.errorType == ErrorType.SERVER}
            errorMessage={
              state.verificationCode?.errorType == ErrorType.SERVER &&
              formState.message
            }
            isRequired
          />
        </CardBody>
        <CardFooter>
          <SubmitButton>{t('verify')}</SubmitButton>
        </CardFooter>
      </form>
      <form action={resendCodeAction}>
        <CardFooter>
          <SubmitButton isDisabled={state.remainingDate == undefined}>
            {state.remainingDate
              ? t('resendCodeDate', { date: state.remainingDate })
              : t('resendCode')}
          </SubmitButton>
        </CardFooter>
      </form>
    </Card>
  )
}
