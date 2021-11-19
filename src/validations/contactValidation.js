import * as yup from 'yup'




export const contactSchema = yup.object({
    name: yup.string().required('Required!'),
    email: yup.string().email('Invalid Email Format').required('Required!'),
    subject: yup.string().required('Required!'),
    message: yup.string().required('Required!')
})