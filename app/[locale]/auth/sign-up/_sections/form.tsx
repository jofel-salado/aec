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
import { GoLock } from 'react-icons/go'
import { FormStatePayload } from '@/types/form-state-payload'
import { useTranslations } from 'next-intl'
import { ErrorType } from '@/models/text-field'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { storeAccount } from '@/actions/account-actions'
import { SubmitButton } from '@/components/submit-button'
import { AiOutlineMail } from 'react-icons/ai'
import { CgArrowLongLeft } from 'react-icons/cg'
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
      <Card className='w-[480px] p-[30px]'>
        <CardHeader>
          <div className='flex items-center justify-center gap-[14px]'>
            <CgArrowLongLeft className='text-primary' />
            <h1 className='text-[26px] font-bold'>{t('signUpAsOwner')}</h1>
          </div>
        </CardHeader>
        <CardBody className='mb-[30px] mt-[40px] flex flex-col gap-[26px]'>
          <Input
            radius='sm'
            labelPlacement='outside'
            label={t('emailAddress')}
            variant='bordered'
            type='email'
            name='email'
            placeholder={t('emailAddress')}
            onChange={() => dispatch(emailChanged())}
            isInvalid={state.email.errorType == ErrorType.SERVER}
            className='text-[#989898]'
            classNames={{
              input: 'placeholder:text-inherit',
              label: 'text-black font-bold',
            }}
            errorMessage={
              state.email.errorType == ErrorType.SERVER &&
              formState.errors?.email?.[0]
            }
            isRequired
            startContent={
              <>
                <div>
                  <AiOutlineMail />
                </div>
              </>
            }
          />
          <Input
            radius='sm'
            labelPlacement='outside'
            variant='bordered'
            label={t('password')}
            name='password'
            placeholder={t('password')}
            onChange={(event) => dispatch(passwordChanged(event.target.value))}
            type={state.password.obscure ? 'password' : 'text'}
            endContent={
              <button
                className='text-[#39C5EC]'
                type='button'
                tabIndex={-1}
                onClick={() => dispatch(passwordEyeToggled())}
              >
                {state.password.obscure ? <FiEye /> : <FiEyeOff />}
              </button>
            }
            className='text-[#989898]'
            classNames={{
              input: 'placeholder:text-inherit',
              label: 'text-black font-bold',
            }}
            startContent={
              <>
                <div>
                  <GoLock />
                </div>
              </>
            }
            isRequired
          />
          <Input
            radius='sm'
            labelPlacement='outside'
            variant='bordered'
            label={t('confirmPassword')}
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
                className='text-[#39C5EC]'
              >
                {state.confirmPassword.obscure ? <FiEye /> : <FiEyeOff />}
              </button>
            }
            validate={(value: string) =>
              value != state.password.value ? t('doesNotMatchPassword') : null
            }
            className='text-[#989898]'
            classNames={{
              input: 'placeholder:text-inherit',
              label: 'text-black font-bold',
            }}
            startContent={
              <>
                <div>
                  <GoLock />
                </div>
              </>
            }
            isRequired
          />
        </CardBody>
        <CardFooter>
          <div className='flex w-full flex-col items-center justify-center gap-[20px]'>
            <SubmitButton>{t('next')}</SubmitButton>
            <div className='flex gap-[8px]'>
              <h1 className=''>{t('alreadyHaveAnAccount')}</h1>
              <h1 className='text-primary'>{t('login')}</h1>
            </div>
          </div>
        </CardFooter>
      </Card>
    </form>
  )
}
