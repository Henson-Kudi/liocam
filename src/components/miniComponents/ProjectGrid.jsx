import React from 'react'
import { useHistory } from 'react-router'
import './ProjectGrid.css'

function ProjectGrid({imgSrc, title, price, link}) {
    const history = useHistory()

    return (
        <div className="project-grid-item">
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
            <i className="fas fa-share-square project-icon" onClick={()=>{
                alert("Please wait...");
            }}></i>
        </div>
    )
}

export default ProjectGrid
