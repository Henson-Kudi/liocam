import React from 'react'
import {useHistory} from 'react-router-dom'
import './GridItem.css'

function GridItem({imgSrc, title, description, link}) {
    const history = useHistory()

    return (
        <div className="grid-item" data-aos='fade-left' onClick={()=>{
            history.push(`/our-services/${link.replace(/ /g, '-')}`)
        }}>
            <div className="grid-item-img-container">
                <img src={imgSrc} alt="" />
            </div>
            <h3>{title}</h3>
            <p>{description.slice(0, 130)}..</p>
            
        </div>
    )
}

export default GridItem
