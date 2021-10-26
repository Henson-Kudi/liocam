import React from 'react'
import {useParams} from 'react-router-dom'
import './SingleService.css'

// TO BE REMOVED IMPORTS
import {gridData} from '../samplesToDelete/grid-data'
import ContactForm from './miniComponents/ContactForm'
import WhyChoseUs from './miniComponents/WhyChoseUs'
// END OF TO BE REMOVED IMPORTS

function SingleService() {
    const {title} = useParams()
    const service = title.replace(/-/g, ' ')
    const serviceData = gridData.filter(item => item.title === service)

    return (
        <div className='SingleService'>
            <div className="service-image-cont">
                <img src={serviceData[0]?.url} alt="Service Image" className="service-image" />
            </div>

            <div className="service-description">
                <h2>{serviceData[0]?.title}</h2>
                <p>{serviceData[0]?.description}</p>

                <section className="why-chose-us">
                    <WhyChoseUs/>

                    <div className="right-section">
                        <ContactForm/>
                    </div>
                </section>  
            </div>
            
        </div>
    )
}

export default SingleService
