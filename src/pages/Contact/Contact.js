import './_Contact.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import emailjs from 'emailjs-com'
import { contactSchema } from '../../validations/contactValidation'
import ErrorStyle from '../../components/ErrorStyle/ErrorStyle'



const Contact = () => {
    const initialValues = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    const submitFunc = (event) => {
        event.preventDefault()

        emailjs.sendForm('service_lhkslk7', 'template_p43q7xk', event.target, 'user_PzwN2TEzAyTG7VI9aIhhD')
        .then((result) => {console.log(result.text)})
        .catch((error) => {console.log(error.text)})

        event.target.reset()
    }

    return(
        <Formik initialValues={initialValues} validationSchema={contactSchema}>
            <div className='e-Contact__wrapper'>
                <div className='b-Contact o-responsiveBlock'>
                    <div className='e-Contact__container o-flex-column'>
                        <div className='e-Contact__card'>
                            <h1>Contact Me</h1>
                            <p>If you'd like to get in touch, drop me a message and I'll get back to you within 24-48 hours.</p>
                            <Form onSubmit={submitFunc}>
                                <ul>
                                    <li>
                                        <label>NAME</label>
                                        <Field type='text' name='name' autoComplete='off'/>
                                        <ErrorMessage name='name' component={ErrorStyle}/>
                                    </li>
                                        
                                    <li>    
                                        <label>EMAIL</label>
                                        <Field type='email' name='email' autoComplete='off'/>
                                        <ErrorMessage name='email' component={ErrorStyle}/>
                                    </li>

                                    <li>
                                        <label>SUBJECT</label>
                                        <Field type='text' name='subject' autoComplete='off'/>
                                        <ErrorMessage name='subject' component={ErrorStyle}/>
                                    </li>

                                    <li>
                                        <label >MESSAGE</label>
                                        <Field as='textarea' name='message' autoComplete='off'/>
                                        <ErrorMessage name='message' component={ErrorStyle}/>
                                    </li>

                                    <button className='e-Contact__button' type='submit'>Send Message</button>
                                </ul>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Formik>
    )
}



export default Contact