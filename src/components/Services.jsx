import React from 'react'
import GridItem from './miniComponents/GridItem'
import './Services.css'

// TO BE REMOVED IMPORTS
import {gridData} from '../samplesToDelete/grid-data'
// END OF TO BE REMOVED IMPORTS

function Services() {
    return (
        <div>
            <section className="services-section">
                <h1 className="hero-heading">
                    Our Services
                </h1>

                <div className="services">
                    {
                        gridData?.map(item => (
                            <GridItem
                                title={item.title}
                                description={item.description}
                                imgSrc={item.url}
                            />
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Services
