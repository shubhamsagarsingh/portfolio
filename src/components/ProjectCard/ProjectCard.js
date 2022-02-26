import './_ProjectCard.scss'
import { Link } from 'react-router-dom'



const ProjectCard = ({title, description, image}) => {
    return(
        <div className='b-ProjectCard o-flex'>
            <img className='e-ProjectCard__img' src={image} alt=''/>

            <div className='e-ProjectCard__right o-flex-column'>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className='e-ProjectCard__button-group o-flex'>
                    <button className='e-ProjectCard__button'><a href='https://github.com/shubhamsagarsingh' target='_blank'>See Code</a></button>
                    {/* <button className='e-ProjectCard__button'>Visit Website</button> */}
                </div>
            </div>
        </div>
    )
}




export default ProjectCard