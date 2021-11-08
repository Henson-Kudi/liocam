import React from 'react'
import useFetch from '../customHooks/useFetch';
import {projects} from '../samplesToDelete/grid-data'
import ProjectGrid from './miniComponents/ProjectGrid';

function Apartment() {
    const {plans:projects} = useFetch()

    const bungalows = projects?.filter(item => item.category === 'apartment')

    return (
        <div>
            <div className="designs-list" style={{
                display: 'flex',
                flexWrap : 'wrap',
                justifyContent : 'space-evenly',
            }}>
                {
                    bungalows?.map(item =>(
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
    )
}

export default Apartment
