import './_Projects.scss'
import ProjectCard from '../../components/ProjectCard/ProjectCard'




const Projects = () => {
    const brandObj1 = {
        title: 'Blogibrary',
        description: 'A platform that lets users create their accounts to write Blog articles on their topic of interest and other users can search for blog articles based on different categories.',
        image: '/images/black_image.jpg'
    }

    const brandObj2 = {
        title: 'MedicSell',
        description: 'A platform that sells authentic medicines at reasonable prices and delivers to customers at their doorstep.',
        image: '/images/black_image.jpg'
        
    }

    const brandObj3 = {
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
                        {/* <ProjectCard title={brandObj3.title} description={brandObj3.description} image={brandObj3.image}/><br/><br/>         */}
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Projects