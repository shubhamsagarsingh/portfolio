import { NavLink } from "react-router-dom"




const Navbar = () => {
    return(
        <div className='b-navbar o-flex o-gap4'>            
            <div className='l-navbar__left'>
                              
            </div>

            <div className='l-navbar__right o-flex-hsa o-gap1'>
                <ul className='e-navbar__list o-flex-hsa o-gap3 o-ul--reset'>
                    <NavLink className='o-link--reset' to='/'><li>HOME</li></NavLink>
                    <NavLink className='o-link--reset' to='/projects'><li>PROJECTS</li></NavLink>
                    <NavLink className='o-link--reset' to='/about'><li>ABOUT</li></NavLink>
                    <NavLink className='o-link--reset' to='/contact'><li>CONTACT</li></NavLink>
                </ul>
            </div>
        </div>
    )
}




export default Navbar