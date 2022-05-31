import moment from 'moment'
import { titleCase } from '../String'

export const userValidator = (name, value) => {
  let errorTxt = ''

  if (!value) {
    errorTxt = titleCase(name) + ' is required'
    if (name === 'confirmPassword') errorTxt = 'Confirm Password is required'
  } else {
    switch (name) {
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errorTxt = 'Invalid email address'
        }
        break
      case 'phone':
        const regex =
          /^0(3[2-9]|5[689]|7(0|[6-9])|8([0-6]|8|9)|9([0-4]|[6-9]))[0-9]{7}$/
        if (!regex.test(value)) {
          errorTxt = 'Invalid phone number'
        }
        break
      case 'password':
        if (value.toString().length < 6) {
          errorTxt = 'Minimum 6 characters'
        }
        break
      case 'birthday':
        if (value > moment()) {
          errorTxt = 'Birthday must be lower than current date'
        }
        break
      default:
        break
    }
  }

  return errorTxt
}
