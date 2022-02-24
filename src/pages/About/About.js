import './_About.scss'




const About = () => {
    return(
        <div className='b-about o-flex-center'>
            <div className='e-about__card o-flex-column o-gap3'>
                <h1>About <i>Shubham Sagar Singh</i></h1>
                <p>I am a fullstack web developer with 2+ years of freelancing experience.</p>
                <p>I have always been fascinated by web technology and that's why I love creating websites that are functional, responsive, asthetically pleasing and have great user experience.</p>
                <h2>TECH STACK</h2>
                <div className='o-flex-hsb'>
                    <ul className='e-about__ul o-flex-column o-gap1 o-ul--reset'>
                        <h3>FRONTEND</h3>
                        <li>ReactJS</li>
                        <li>Javascript(ES6+)</li>
                        <li>SCSS</li>
                        <li>Redux</li>
                        <li>Axios</li>
                        <li>Formik, Yup</li>
                    </ul>
                    
                    <ul className='e-about__ul o-flex-column o-gap1 o-ul--reset'>
                        <h3>BACKEND</h3>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}



export default About