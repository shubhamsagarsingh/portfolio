import ProjectCard from '../components/ProjectCard'




const Projects = () => {
    const brandObj1 = {
        title: 'MedicSell',
        description: 'A platform that sells authentic medicines at correct prices and delivers to users at doorstep.',
        image: '/images/coming_soon1.jpg'
    }

    const brandObj2 = {
        title: 'AstroMentor',
        description: 'A platform that connects users to world class Astrologers and get live counselling from them.',
        image: '/images/coming_soon2.jpg'
    }

    return(
        <div className='b-project o-flex-center'>
            <div className='e-project__card o-flex-column o-gap4'>
                <h1>Projects</h1>
                <ProjectCard title={brandObj1.title} description={brandObj1.description} image={brandObj1.image} />
                <ProjectCard title={brandObj2.title} description={brandObj2.description} image={brandObj2.image}/>             
            </div>
        </div>
    )
}




export default Projects