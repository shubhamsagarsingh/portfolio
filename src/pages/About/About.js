import './_About.scss'




const About = () => {
    return(
        <div className='e-About__wrapper'>
            <div className='b-About o-responsiveBlock'>
                <div className='e-About__container'>              
                    <div className='e-About__card o-flex-column'>
                        <h1>About <i>Shubham Sagar Singh</i></h1>
                        <p>I am a fullstack web developer with 2+ years of professional web development experience.</p>
                        <p>I have always been fascinated by web technology and that's why I love creating websites that are functional, responsive, asthetically pleasing and have great user experience.</p>
                        <h2>TECH STACK</h2>
                        <div className='o-flex'>
                            <ul className='e-About__ul o-flex-column'>
                                <h3>FRONTEND</h3>
                                <li>ReactJS</li>
                                <li>Javascript(ES6+)</li>
                                <li>SCSS</li>
                                <li>Redux</li>
                                <li>Axios</li>
                                <li>Formik, Yup</li>
                            </ul>
                            
                            <ul className='e-About__ul o-flex-column'>
                                <h3>BACKEND</h3>
                                <li>NodeJS</li>
                                <li>ExpressJS</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default About
