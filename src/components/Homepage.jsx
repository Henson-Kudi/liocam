import React, {useState, useRef} from 'react'
import './Homepage.css'
import Services from './Services'
import ProjectGrid from './miniComponents/ProjectGrid'
import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import slide3 from '../images/slide3.jpg'

// TO BE REMOVED IMPORTS
import {projects} from '../samplesToDelete/grid-data'
// END OF TO BE REMOVED IMPORTS



function Homepage() {
    const formRef = useRef(null)
    const [currentImg, setCurrentImg] = useState(0)
    const images = [slide1, slide2, slide3]
    const length = images.length

    const prevSlide = ()=>{
        setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1)
    }

    const nextSlide = ()=>{
        setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        alert('Form Submited...')
        e.target.reset()
    }



    return (
        <div className='home-page'>
            {/* ________________________________HERO SECTION_____________________________________ */}

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

            <Services className="smoth-scroll"/>

            {/* __________________PROJECTS_____________________ */}

            <section className="recent-projects">
                <div className="recent-plans">
                    <div className="heading"><span></span> <h3>Recent Plans</h3> <span></span></div>
                    
                    <div className="recent-projects-list">
                        {
                            projects?.map((item, i) =>(
                                <ProjectGrid
                                    title={item.title}
                                    imgSrc = {item.imgSrc}
                                    price = {item.price}
                                    link = {item.id}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className="recent-plans">
                    <div className="heading"><span></span> <h3>Recent Builds</h3> <span></span></div>
                    
                    <div className="recent-projects-list">
                        {
                            projects?.map((item, i) =>(
                                <ProjectGrid
                                    title={item.title}
                                    imgSrc = {item.imgSrc}
                                    price = {item.price}
                                    link = {item.id}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* _____________________________________END OF PROJECTS________________________________ */}


            {/* _____________________________________HOW WE WORK________________________________ */}

            <section className="how-we-work">
                <h1>How We Work</h1>

                <div className="how-we-work-container">
                    <div className="schedule">
                        <i className="fas fa-calendar-alt work-icon"></i>
                        <p>Schedule a <br/> meeting</p>
                    </div>

                    <div className="schedule">
                        <i className="fas fa-users work-icon"></i>
                        <p>Discuss Your <br/> Requirements</p>
                    </div>

                    <div className="schedule">
                        <i className="fas fa-edit work-icon"></i>
                        <p>Let Us Do The <br/> Design Work</p>
                    </div>

                    <div className="schedule">
                        <i className="fas fa-home work-icon"></i>
                        <p>Let Us COnstruct. <br/> Based On Agreement</p>
                    </div>
                </div>
            </section>

            {/* _____________________________________END OF HOW WE WORK________________________________ */}

            {/* _____________________________________WHY CHOSE US________________________________ */}

            <section className="why-chose-us">
                <div className="left-section">
                    <h2>Why Chose Us</h2>
                    <div className="chose-us-options-container">
                        <div>
                            <i className="fas fa-edit chose-icon"></i>
                            <p>Best Designs</p>
                        </div>

                        <div>
                            <i className="fas fa-thumbs-up chose-icon"></i>
                            <p>100% flexible</p>
                        </div>

                        <div>
                            <i className="fas fa-calendar-alt  chose-icon"></i>
                            <p>Accurate Timeline</p>
                        </div>

                        <div>
                            <i className="fas fa-dollar-sign chose-icon"></i>
                            <p>Very Affordable</p>
                        </div>
                        
                    </div>
                </div>

                <div className="right-section">
                    <h2>Reach To Us</h2>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="reach-to-us-form-container">
                            <div className="name-cont form-control">
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" id="name" placeholder="Enter Full Name" />
                            </div>

                            <div className="email-cont form-control">
                                <label htmlFor="email">Email Address:</label>
                                <input type="email" name="email" id="email" placeholder='Enter Email Address' />
                            </div>

                            <div className="contact-cont form-control">
                                <label htmlFor="contact">Contact:</label>
                                <input type="tel" name="contact" id="contact" placeholder="Enter Contact" />
                            </div>

                            <div className="address-cont form-control">
                                <label htmlFor="address">Address:</label>
                                <input type="text" name="address" id="address" placeholder='Enter Address' />
                            </div>

                            <div className="message-cont">
                                <textarea rows='5' name="message" placeholder='Message' />
                            </div>

                            <div className="btnSub-cont">
                                <input type="submit" value='Submit' className='btnSub' />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            {/* _____________________________________END OF WHY CHOSE US________________________________ */}
        </div>
    )
}

export default Homepage
