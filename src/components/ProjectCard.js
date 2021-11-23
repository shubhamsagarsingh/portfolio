const ProjectCard = ({title, description, image}) => {
    return(
        <div className='b-project-card o-flex'>
            <img className='e-project-card__img' src={image} alt=''/>

            <div className='e-project-card__right o-flex-column o-gap2'>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className='e-project-card__button-group o-flex-hsa'>
                    <button className='e-project-card__button'>See Code</button>
                    <button className='e-project-card__button'>Visit Website</button>
                </div>
            </div>
        </div>
    )
}




export default ProjectCard