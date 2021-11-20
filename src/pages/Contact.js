import { Formik, Form, Field, ErrorMessage } from 'formik'
import emailjs from 'emailjs-com'
import { contactSchema } from '../validations/contactValidation'
import ErrorStyle from '../components/ErrorStyle'



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
        <div className='b-contact o-flex-center'>
            <div className='e-contact__card o-flex-column o-gap1'>
                <h1>Contact Me</h1>
                <p>If you'd like to get in touch, drop me a message and I'll get back to you within 24-48 hours.</p>
                <Form className='e-contact__form o-flex-column o-gap1' onSubmit={submitFunc}>
                    <div className='o-flex o-gap1'>
                        <section className='o-flex-column o-gap1 '>
                            <label>NAME</label>
                            <Field type='text' name='name'/>
                            <ErrorMessage name='name' component={ErrorStyle}/>
                        </section>

                        <section className='o-flex-column o-gap1 '>
                            <label>EMAIL</label>
                            <Field type='email' name='email'/>
                            <ErrorMessage name='email' component={ErrorStyle}/>
                        </section>
                    </div>

                    <label>SUBJECT</label>
                    <Field type='text' name='subject'/>
                    <ErrorMessage name='subject' component={ErrorStyle}/>

                    <label >MESSAGE</label>
                    <Field as='textarea' name='message'/>
                    <ErrorMessage name='message' component={ErrorStyle}/>

                    <button className='e-contact__button' type='submit'>Send Message</button>
                </Form>
            </div>
        </div>
        </Formik>
    )
}



export default Contact