'use client'

import { RootState } from '@/store'
import {
  addressChanged,
  dateOfBirthChanged,
  firstNameChanged,
  formStateChanged,
  lastNameChanged,
  phoneNumberChanged,
  usernameChanged,
} from '../_redux/create-account-slice'
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Input,
} from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { useFormState, useFormStatus } from 'react-dom'
import { Account } from '@/models/account'
import { FiMapPin } from 'react-icons/fi'
import { FormStatePayload } from '@/types/form-state-payload'
import { useTranslations } from 'next-intl'
import { ErrorType } from '@/models/text-field'
import { CiPhone } from 'react-icons/ci'
import { storeAccount } from '@/actions/account-actions'
import { SubmitButton } from '@/components/submit-button'
import { Image } from '@nextui-org/react'
import { CgArrowLongLeft } from 'react-icons/cg'
import uploadImagePlaceholder from '@/public/assets/images/upload-image-placeholder.png'
import uploadImageButton from '@/public/assets/images/add-image-buitton.png'
export default function Form() {
  const t = useTranslations('CreateAccount')
  const state = useAppSelector((state: RootState) => state.signUpState)
  const dispatch = useAppDispatch()
  const [imagePlaceholder, setImagePlaceholder] = useState(
    uploadImagePlaceholder.src,
  )
  const [imageUploadButton, setImageUploadButton] = useState(
    uploadImageButton.src,
  )

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
        <CardHeader className='flex w-full flex-col items-center justify-center '>
          <div className='flex w-full items-center justify-start gap-[14px] '>
            <CgArrowLongLeft className='text-primary' />
            <h1 className='text-[26px] font-bold'>{t('createAccount')}</h1>
          </div>
          <div className='relative m-auto mt-[60px] h-[96px] w-[96px]'>
            <label htmlFor='uploadImage' className='h-full  w-full '>
              <Avatar src={imagePlaceholder} className='h-full w-full' />
              <Avatar
                src={imageUploadButton}
                className='h-36px] absolute bottom-0 right-0 m-auto w-[36px] cursor-pointer'
              />
              <input id='uploadImage' type='file' hidden />
            </label>
          </div>
        </CardHeader>
        {/* <CardHeader>
          <div className='flex w-full flex-col items-center justify-center'>
            <div className='flex w-full items-center justify-start gap-[14px] '>
              <CgArrowLongLeft className='text-primary' />
              <h1 className='text-[26px] font-bold'>{t('createAccount')}</h1>
            </div>
            <label htmlFor='uploadImage' className='relative mt-[60px] '>
              <div className='relative '>
                <div>
                  <Image
                    width={96}
                    alt='NextUI hero Image'
                    src={imagePlaceholder}
                  />
                </div>
                <div className='absolute bottom-0 right-0 cursor-pointer'>
                  <Image
                    className=''
                    width={36}
                    alt='NextUI hero Image'
                    src={imageUploadButton}
                  />
                </div>
              </div>
              <input id='uploadImage' type='file' hidden />
            </label>
          </div>
        </CardHeader> */}
        <CardBody className='mb-[30px] mt-[40px] flex flex-col gap-[26px]'>
          <Input
            radius='sm'
            labelPlacement='outside'
            label={t('userName')}
            variant='bordered'
            type='text'
            name='username'
            placeholder={t('userName')}
            onChange={() => dispatch(usernameChanged())}
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
          />
          <div className='flex items-center justify-between gap-[30px]'>
            <Input
              radius='sm'
              labelPlacement='outside'
              label={t('firstName')}
              variant='bordered'
              type='text'
              name='firstname'
              placeholder={t('firstName')}
              onChange={() => dispatch(firstNameChanged())}
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
            />
            <Input
              radius='sm'
              labelPlacement='outside'
              label={t('lastName')}
              variant='bordered'
              type='text'
              name='lastname'
              placeholder={t('lastName')}
              onChange={() => dispatch(lastNameChanged())}
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
            />
          </div>
          <Input
            radius='sm'
            labelPlacement='outside'
            label={t('dateOfBirth')}
            variant='bordered'
            type='text'
            name='dateofbirth'
            placeholder={t('dateOfBirth')}
            onChange={() => dispatch(dateOfBirthChanged())}
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
          />
          <Input
            radius='sm'
            labelPlacement='outside'
            label={t('phoneNumber')}
            variant='bordered'
            type='text'
            name='phonenumber'
            placeholder={t('phoneNumber')}
            onChange={() => dispatch(phoneNumberChanged())}
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
              <div>
                <CiPhone />
              </div>
            }
          />
          <Input
            radius='sm'
            labelPlacement='outside'
            label={t('address')}
            variant='bordered'
            type='text'
            name='address'
            placeholder={t('address')}
            onChange={() => dispatch(addressChanged())}
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
              <div>
                <FiMapPin />
              </div>
            }
          />
        </CardBody>
        <CardFooter>
          <div className='flex w-full flex-col items-start justify-center gap-[40px]'>
            <Checkbox name='termsAndConditions' defaultSelected>
              <div className='flex gap-[4px] text-[14px]'>
                <h1>{t('iAgreeToThe')}</h1>
                <h1 className='font-bold'>{t('termsAndConditions')}</h1>
              </div>
            </Checkbox>
            <SubmitButton>{t('signUp')}</SubmitButton>
          </div>
        </CardFooter>
      </Card>
    </form>
  )
}
