'use client';

import { RootState } from '@/store';
import { ErrorType } from '@/models/text-field';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from '@nextui-org/react';
import Dict, { SignUpDict } from '@/models/dict';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { formSubmitted, emailAddressChanged, passwordChanged, passwordEyeToggled } from '../../_redux/sign-up-slice';
import { useTranslations } from 'use-intl';

export default function SignUpForm() {
  const t = useTranslations('SignUp')
  const state = useAppSelector((state: RootState) => state.signUpState);
  const dispatch = useAppDispatch();

  function submit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(formSubmitted());
  }

  return (
    <form onSubmit={submit} noValidate={true}>
      <Card className='w-[400px] p-12'>
        <CardHeader>
          <h1>{t('signUp')}</h1>
        </CardHeader>
        <CardBody className='flex flex-col gap-4'>
          <Input
            type='text'
            name='email'
            placeholder={t('emailAddress')}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(emailAddressChanged(event.target.value))
            }
            isInvalid={state.email.errorType != ErrorType.NONE}
          />
          <Input
            className='block'
            name='password'
            placeholder={t('password')}
            onChange={(event) => dispatch(passwordChanged(event.target.value))}
            isInvalid={state.password.errorType != ErrorType.NONE}
            type={state.password.obscure ? 'text' : 'password'}
            endContent={
              <button
                className='focus:outline-none'
                type='button'
                onClick={() => dispatch(passwordEyeToggled())}
              >
                {state.password.obscure ? 'hide' : 'show'}
              </button>
            }
          />
        </CardBody>
        <CardFooter>
          <Button type='submit' fullWidth={true}>
            {t('signUp')}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
