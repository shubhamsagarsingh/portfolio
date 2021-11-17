const Contact = () => {
    return(
        <div className='b-contact o-flex-center'>
            <div className='e-contact__card o-flex-column o-gap1'>
                <h1>Contact Me</h1>
                <p>If you'd like to get in touch, drop me a message and I'll get back to you within 24-48 hours.</p>
                <form className='e-contact__form o-flex-column o-gap1'>
                    <div className='o-flex o-gap1'>
                        <section className='o-flex-column o-gap1 '>
                            <label>NAME</label>
                            <input/>
                        </section>

                        <section className='o-flex-column o-gap1 '>
                            <label>EMAIL</label>
                            <input/>
                        </section>
                    </div>

                    <label>SUBJECT</label>
                    <input/>

                    <label>MESSAGE</label>
                    <textarea/>

                    <button className='e-contact__button'>Send Message</button>
                </form>
            </div>
        </div>
    )
}



export default Contact