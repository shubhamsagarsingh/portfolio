import { NavLink } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'





const Home = () => {
    return(
        <div className='b-home l-grid'>
            <div className='l-home__left o-flex-column o-flex-center o-gap1'>
                <h3>I'm a Computer Science graduate,</h3>
                <h3>with <span>2+</span> years of experience in freelancing</h3>
                <h3>as a fullstack web developer</h3>
                <div className='l-home__buttons o-flex o-gap4'>
                    <NavLink to='/contact'><button className='e-home__button' >Hire me as a Freelancer</button></NavLink>
                    <button className='e-home__button'>Hire me Full Time</button>
                </div>
            </div>

            <div className='l-home__right o-flex-center'>
                    <h1 className='e-home__name'><Typewriter words={['Shubham Sagar Singh']} 
                            loop={500} 
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                    </h1>
            </div>
        </div>
    )
}



export default Home