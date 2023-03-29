import { body } from 'express-validator'

const formValidator: any = [
    body('email').isEmail().withMessage('email is invalid')
]

export default formValidator