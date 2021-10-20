import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/liocam-logo.jpg'
import './Nav.css'

function Nav() {
    return (
        <div className='nav'>
            <div className="nav-container">
                <div className="logo-section">
                    <img src={logo} alt="company logo" />
                </div>

                <div className="nav-links">
                    <div className="link"><Link to='/'>
                        Home
                    </Link></div>
                    <div className="link"><Link to='/bungalow-designs'>
                        Bungalow
                    </Link></div>
                    <div className="link"><Link to='/duplex-designs'>
                        Duplex
                    </Link></div>
                    <div className="link"><Link to='/apartment-designs'>
                        Apartments
                    </Link></div>
                    <div className="link"><Link to='/liocam-store'>
                        Store
                    </Link></div>
                    <div className="link"><Link to='/other-designs'>
                        Other Designs
                    </Link></div>
                </div>

                <div className="language-section">
                    <div className="icons">
                        <i className="fas fa-globe fa-lg"></i>
                        <i className="fas fa-sort-down fa-lg"></i>
                    </div>
                    <div className="text">
                        <span>ENG</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
