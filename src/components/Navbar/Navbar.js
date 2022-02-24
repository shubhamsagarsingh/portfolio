import './_Navbar.scss'
import { NavLink } from "react-router-dom"




const Navbar = () => {
    return(
        <div className='e-Navbar__wrapper'>            
            <div className='b-Navbar o-responsiveBlock'>
                <div className='e-Navbar__container o-flex'>
                    <ul className='o-flex'>
                        <li><NavLink exact activeClassName="o-activeClassName" to='/'>HOME</NavLink></li>
                        <li><NavLink exact activeClassName="o-activeClassName" to='/projects'>PROJECTS</NavLink></li>
                        <li><NavLink exact activeClassName="o-activeClassName" to='/about'>ABOUT</NavLink></li>
                        <li><NavLink exact activeClassName="o-activeClassName" to='/contact'>CONTACT</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}




export default Navbar