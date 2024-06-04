import Dict from '@/models/dict';
import { TextField } from '@/models/text-field';

export interface SignUpState {
  email: TextField<string>;
  password: TextField<string>;
  confirmPassword: TextField<string>;
}
