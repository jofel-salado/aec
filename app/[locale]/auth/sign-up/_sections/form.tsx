'use client'

import { RootState } from '@/store'
import {
  confirmPasswordChanged,
  confirmPasswordEyeToggled,
  emailChanged,
  formStateChanged,
  passwordChanged,
  passwordEyeToggled,
} from '../_redux/sign-up-slice'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from '@nextui-org/react'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { useFormState, useFormStatus } from 'react-dom'
import { Account } from '@/models/account'
import { FormState } from '@/types/form-state'
import { FormStatePayload } from '@/types/form-state-payload'
import { useTranslations } from 'next-intl'
import { ErrorType } from '@/models/text-field'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { storeAccount } from '@/actions/account-actions'
import { SubmitButton } from '@/components/submit-button'

export default function Form() {
  const t = useTranslations('SignUp')
  const state = useAppSelector((state: RootState) => state.signUpState)
  const dispatch = useAppDispatch()
  const [formState, formAction] = useFormState(
    storeAccount,
    {},
  ) as FormStatePayload<Account>

  useEffect(() => {
    dispatch(formStateChanged(formState))
  }, [formState])

  return (
    <form action={formAction}>
      <Card className='w-[400px] p-12'>
        <CardHeader>
          <h1>{t('signUp')}</h1>
        </CardHeader>
        <CardBody className='flex flex-col gap-4'>
          <Input
            type='email'
            name='email'
            placeholder={t('emailAddress')}
            onChange={() => dispatch(emailChanged())}
            isInvalid={state.email.errorType == ErrorType.SERVER}
            errorMessage={
              state.email.errorType == ErrorType.SERVER &&
              formState.errors?.email?.[0]
            }
            isRequired
          />
          <Input
            name='password'
            placeholder={t('password')}
            onChange={(event) => dispatch(passwordChanged(event.target.value))}
            type={state.password.obscure ? 'password' : 'text'}
            endContent={
              <button
                type='button'
                tabIndex={-1}
                onClick={() => dispatch(passwordEyeToggled())}
              >
                {state.password.obscure ? <FiEye /> : <FiEyeOff />}
              </button>
            }
            isRequired
          />
          <Input
            name='confirmPassword'
            placeholder={t('confirmPassword')}
            onChange={(event) =>
              dispatch(confirmPasswordChanged(event.target.value))
            }
            type={state.confirmPassword.obscure ? 'password' : 'text'}
            endContent={
              <button
                type='button'
                tabIndex={-1}
                onClick={() => dispatch(confirmPasswordEyeToggled())}
              >
                {state.confirmPassword.obscure ? <FiEye /> : <FiEyeOff />}
              </button>
            }
            validate={(value: string) =>
              value != state.password.value ? t('doesNotMatchPassword') : null
            }
            isRequired
          />
        </CardBody>
        <CardFooter>
          <SubmitButton>{t('signUp')}</SubmitButton>
        </CardFooter>
      </Card>
    </form>
  )
}
