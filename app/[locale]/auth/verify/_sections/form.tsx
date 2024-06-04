'use client'

import {
  requestVerificationAccount,
  verifyAccount,
} from '@/actions/account-actions'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import {
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
import { CgArrowLongLeft } from 'react-icons/cg'
import { IoIosCloseCircleOutline } from 'react-icons/io'

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
    <Card className='w-[480px] p-[30px]'>
      <CardHeader>
        <div className='flex items-center justify-center gap-[14px]'>
          <CgArrowLongLeft className='text-primary' />
          <h1 className='text-[26px] font-bold'>{t('verificationCode')}</h1>
        </div>
      </CardHeader>
      <div className='my-[30px]  px-[60px] text-center'>
        <h1 className='text-[16px] text-[#A2A2A2]'>
          {t('pleaseEnterVerification')}
        </h1>
      </div>
      <form action={formAction}>
        <CardBody>
          <Input
            variant='bordered'
            size='lg'
            type='number'
            name='verificationCode'
            placeholder={t('verificationCode')}
            onChange={() => dispatch(verificationCodeChanged())}
            isInvalid={state.verificationCode?.errorType == ErrorType.SERVER}
            // errorMessage={
            //   <>
            // <div className='absolute flex h-[56px] w-full items-center gap-[8px] rounded-lg bg-red-500 p-[8px] text-white'>
            //   <div>
            //     <IoIosCloseCircleOutline className='text-[18px]' />
            //   </div>
            //   <h1 className='text-[16px]'>Invalid Code</h1>
            // </div>
            //     {/* {state.verificationCode?.errorType == ErrorType.SERVER && (
            //       <div className='w-full rounded bg-red-500 p-2 text-white'>
            //         {formState.message}
            //       </div>
            //     )} */}
            //   </>
            // }
            classNames={{
              input: 'text-center',
              inputWrapper: 'h-[64px] w-[272px] m-auto ',
            }}
            isRequired
          />
        </CardBody>
        <div className='mb-[50px] mt-[20px] flex items-center justify-center gap-[8px] px-[60px] text-center'>
          <h1 className='text-[16px] '>{t('didNotReceiveCode')}</h1>
          <form action={resendCodeAction}>
            <h1 className='text-[16px] text-primary'>
              {state.remainingDate
                ? t('resendCodeDate', { date: state.remainingDate })
                : t('resend')}
            </h1>
          </form>
        </div>
        {state.verificationCode?.errorType == ErrorType.SERVER && (
          <div className='mb-[150px] flex h-[56px] w-full items-center gap-[8px] rounded-lg bg-red-500 p-[8px] text-white'>
            <div>
              <IoIosCloseCircleOutline className='text-[18px]' />
            </div>
            <h1 className='text-[16px]'>Invalid Code</h1>
          </div>
        )}
        <CardFooter>
          <SubmitButton>{t('verify')}</SubmitButton>
        </CardFooter>
      </form>
      {/* <form action={resendCodeAction}>
        <CardFooter>
          <SubmitButton isDisabled={state.remainingDate == undefined}>
            {state.remainingDate
              ? t('resendCodeDate', { date: state.remainingDate })
              : t('resendCode')}
          </SubmitButton>
        </CardFooter>
      </form> */}
    </Card>
  )
}
