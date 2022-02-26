import './_Home.scss'
import { NavLink } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'





const Home = () => {
    return(
        <div className='e-Home__wrapper'>
            <div className='b-Home o-responsiveBlock'>
                <div className='e-Home__container o-flex'>
                    <div className='e-Home__left'>
                        <h3>I'm a Computer Science graduate,</h3>
                        <h3>with <span>2+</span> years of experience in freelancing</h3>
                        <h3>as a fullstack web developer</h3>
                        <div className='e-Home__buttons o-flex'>
                            <NavLink to='/contact'><button className='e-Home__button' >Hire me</button></NavLink>
                            <NavLink to="/files/resume2022.pdf" target="_blank" download><button className='e-Home__button'>Download Resume</button></NavLink>
                        </div>
                    </div>

                    <div className='e-Home__right'>
                        <h1 className='e-Home__name o-flex'>
                            <Typewriter words={['Shubham Sagar Singh']} 
                                loop={2} 
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={100}
                                delaySpeed={1000}
                            />
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Home