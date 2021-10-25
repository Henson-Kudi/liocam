import React from 'react'
import { useHistory } from 'react-router'
import './ProjectGrid.css'

function ProjectGrid({imgSrc, title, price, link, children}) {
    const history = useHistory()

    return (
        <div className="project-grid-item" data-aos='fade-up'>
            <div className="project-grid-item-img-container" onClick={()=>{
                history.push(`/${link}`)
            }}>
                <img src={imgSrc} alt="" />
            </div>
            <div className="description-text" onClick={()=>{
                history.push(`/${link}`)
            }}>
                <p>{title}</p>
                <p>{price}</p>
            </div>
            {children}
        </div>
    )
}

export default ProjectGrid
