import React, {useState} from 'react'
import 'aos/dist/aos.css'
import './Homepage.css'
import Services from './Services'
import ProjectGrid from './miniComponents/ProjectGrid'
import ContactForm from './miniComponents/ContactForm'
import WhyChoseUs from './miniComponents/WhyChoseUs'
import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import slide3 from '../images/slide3.jpg'


// TO BE REMOVED IMPORTS
import {projects} from '../samplesToDelete/grid-data'
// END OF TO BE REMOVED IMPORTS



function Homepage() {
    const [currentImg, setCurrentImg] = useState(0)
    const images = [slide1, slide2, slide3]
    const length = images.length
    const prevSlide = ()=>{
        setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1)
    }

    const nextSlide = ()=>{
        setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1)
    }


    // initial animation on scroll (aos)



    return (
        <div className='home-page'>
            {/* ___________________________HERO SECTION_____________________________ */}

            <section className="hero-image-container smoth-scroll">
            <i className="fas fa-chevron-left fa-lg icon icon-left" onClick={prevSlide}></i>
            <i className="fas fa-chevron-right fa-lg icon icon-right" onClick={nextSlide}></i>

            {
                images?.map((img, i) => (
                    <div className={i === currentImg ? 'slide active' : 'slide'} key={i}>
                        {
                            i === currentImg && <img src={img} alt="hero display 1" className='image' />
                        }
                    </div>
                ))
            }

                <article className="hero-text-section">
                    <div className="hero-text-container">
                        <h1 className='hero-heading'>Some Hero Text</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam ea qui, vel adipisci suscipit autem nemo mollitia iure doloribus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quidem suscipit consequatur nobis tempore pariatur quis natus numquam voluptate libero?
                        </p>
                    </div>
                </article>
                
            </section>

            {/* ____________________________END OF HERO SECTION_________________________________ */}

            <Services className="smoth-scroll" />

            {/* __________________PROJECTS_____________________ */}

            <section className="recent-projects">
                <div className="recent-plans">
                    <div className="heading"><span></span> <h3>Recent Plans</h3> <span></span></div>
                    
                    <div className="recent-projects-list">
                        {
                            projects?.sort((a, b)=> new Date(b.date) > new Date(a.date)).slice(0, 12).map((item, i) =>(
                                <ProjectGrid
                                    key={item.id}
                                    title={item.name}
                                    imgSrc = {item.images[0]}
                                    price = {item.price}
                                    link = {`designs/${item.category}/${item.id}`}
                                />
                            ))
                        }
                    </div>
                </div>

                {/* <div className="recent-plans">
                    <div className="heading"><span></span> <h3>Recent Builds</h3> <span></span></div>
                    
                    <div className="recent-projects-list">
                        {
                            projects?.map((item, i) =>(
                                <ProjectGrid
                                    aos='fade-up'
                                    key={item.id}
                                    title={item.name}
                                    imgSrc = {item.images[0]}
                                    price = {item.price}
                                    link = {`designs/${item.id}`}
                                />
                            ))
                        }
                    </div>
                </div> */}
            </section>

            {/* _____________________________________END OF PROJECTS________________________________ */}


            {/* _____________________________________HOW WE WORK________________________________ */}

            <section className="how-we-work">
                <h1>How We Work</h1>

                <div className="how-we-work-container">
                    <div className="schedule" data-aos='flip-right'>
                        <i className="fas fa-calendar-alt work-icon"></i>
                        <p>Schedule a <br/> meeting</p>
                    </div>

                    <div className="schedule" data-aos='flip-down'>
                        <i className="fas fa-users work-icon"></i>
                        <p>Discuss Your <br/> Requirements</p>
                    </div>

                    <div className="schedule" data-aos='flip-up'>
                        <i className="fas fa-edit work-icon"></i>
                        <p>Let Us Do The <br/> Design Work</p>
                    </div>

                    <div className="schedule" data-aos='flip-left' data-aos-easing="ease-out-cubic">
                        <i className="fas fa-home work-icon"></i>
                        <p>Let Us COnstruct. <br/> Based On Agreement</p>
                    </div>
                </div>
            </section>

            {/* _____________________________________END OF HOW WE WORK________________________________ */}

            {/* _____________________________________WHY CHOSE US________________________________ */}

            <section className="why-chose-us">
                <WhyChoseUs/>

                <div className="right-section">
                    <ContactForm/>
                </div>
            </section>
            {/* _____________________________________END OF WHY CHOSE US________________________________ */}
        </div>
    )
}

export default Homepage
