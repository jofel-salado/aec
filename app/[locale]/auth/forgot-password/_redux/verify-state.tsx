import { TextField } from '@/models/text-field'

export interface VerifyState {
  verificationCode?: TextField<string>
  verificationCodeTimestamp?: string
  remainingDate?: string
}
