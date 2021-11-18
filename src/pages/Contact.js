import { useState } from 'react'
import { contactSchema } from '../validations/contactValidation'



const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const changeFunc = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const submitFunc = async(event) => {
        event.preventDefault()

        await contactSchema.isValid(form)
    }

    return(
        <div className='b-contact o-flex-center'>
            <div className='e-contact__card o-flex-column o-gap1'>
                <h1>Contact Me</h1>
                <p>If you'd like to get in touch, drop me a message and I'll get back to you within 24-48 hours.</p>
                <form className='e-contact__form o-flex-column o-gap1' onSubmit={submitFunc}>
                    <div className='o-flex o-gap1'>
                        <section className='o-flex-column o-gap1 '>
                            <label>NAME</label>
                            <input type='text' name='name' onChange={changeFunc}/>
                        </section>

                        <section className='o-flex-column o-gap1 '>
                            <label>EMAIL</label>
                            <input type='email' name='email' onChange={changeFunc}/>
                        </section>
                    </div>

                    <label>SUBJECT</label>
                    <input type='text' name='subject' onChange={changeFunc}/>

                    <label >MESSAGE</label>
                    <textarea name='message' onChange={changeFunc}/>

                    <button className='e-contact__button' type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    )
}



export default Contact