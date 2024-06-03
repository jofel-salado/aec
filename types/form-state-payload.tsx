import { FormState } from './form-state';

export type FormStatePayload<T> = [
  state: FormState<T>,
  dispatch: (payload: any) => void,
  isPending: boolean,
];
