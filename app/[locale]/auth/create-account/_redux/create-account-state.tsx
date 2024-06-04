import Dict from '@/models/dict'
import { TextField } from '@/models/text-field'

export interface CreateAccountState {
  username: TextField<string>
  firstName: TextField<string>
  lastName: TextField<string>
  dateOfBirth: TextField<string>
  phoneNumber: TextField<string>
  address: TextField<string>
}
