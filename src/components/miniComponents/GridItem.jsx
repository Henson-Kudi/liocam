import React from 'react'
import './GridItem.css'

function GridItem({imgSrc, title, description}) {
    return (
        <div className="grid-item">
            <div className="grid-item-img-container">
                <img src={imgSrc} alt="" />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default GridItem
