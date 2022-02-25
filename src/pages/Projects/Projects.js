import './_Projects.scss'
import ProjectCard from '../../components/ProjectCard/ProjectCard'




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
        <div className='e-Project__wrapper'>
            <div className='b-Project o-responsiveBlock'>
                <div className='e-Project__container'>
                    <div className='e-Project__card'>
                        <h1>Projects</h1>
                        <ProjectCard title={brandObj1.title} description={brandObj1.description} image={brandObj1.image}/><br/><br/>
                        <ProjectCard title={brandObj2.title} description={brandObj2.description} image={brandObj2.image}/><br/><br/>            
                        <ProjectCard title={brandObj2.title} description={brandObj2.description} image={brandObj2.image}/><br/><br/>          
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Projects