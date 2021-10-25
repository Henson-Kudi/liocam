import React, { useState, useRef, useEffect,  } from 'react'
import { Link } from 'react-router-dom'
import ContactForm from './miniComponents/ContactForm'
import logo from '../images/liocam-logo.jpg'
import './Nav.css'

function Nav() {
    const wrapperRef = useRef(null)
    const [navLink, setNavLink] = useState(window.innerWidth <= 510 ? '-50%' : '-40%')

    const [requestCall, setRequestCall] = useState(false)

    const navStyles = {
        left: navLink
    }

    const openNav = ()=> {
        setNavLink('0')
    }

    const closeNav = ()=> {
        setNavLink(window.innerWidth <= 510 ? '-50%' : '-40%')
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        }
    })

    function handleClickOutside(e){
        const {current : wrap} = wrapperRef;
        if(wrap && !wrap.contains(e.target)){
            closeNav();
        }
    }

    return (
        <div className='nav'>
            <div className="nav-container">
                <div className="logo-section">
                    <img src={logo} alt="company logo" />
                </div>

                <div className="hamburger-menu">
                    <i className="fas fa-bars fa-lg" onClick={openNav}></i>
                </div>

                <div className="address-small-screen">
                    <p>Liocam Douala, Cameroon</p>
                    <p><a href="tel:+1234567890">
                        <i className="fas fa-phone-alt fa-md"></i>
                        <span className='call'>+1234567890</span>
                    </a>
                    <span className='request-call' onClick={()=>[
                        setRequestCall(true)
                    ]}>Request Call</span></p>
                </div>

                <div className="nav-links" style={navStyles} ref={wrapperRef}>
                    <div className="close-menu">
                        <i className="fas fa-times fa-lg" onClick={closeNav}></i>
                    </div>
                    <div className="link"><Link to='/' onClick={closeNav}>
                        Home
                    </Link></div>
                    <div className='link'><Link to='/bungalow-designs' onClick={closeNav}>
                        Bungalow
                    </Link></div>
                    <div className="link"><Link to='/duplex-designs' onClick={closeNav}>
                        Duplex
                    </Link></div>
                    <div className="link"><Link to='/apartment-designs' onClick={closeNav}>
                        Apartments
                    </Link></div>
                    <div className="link"><Link to='/other-designs' onClick={closeNav}>
                        Other Designs
                    </Link></div>
                    <div className="link"><Link to='/liocam-store' onClick={closeNav}>
                        Store
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
            {
                requestCall &&
                <div className="gold-order">
                    <ContactForm
                        showCan={true}
                        cancel={()=>{setRequestCall(false)}}
                    />
                </div>
            }
        </div>
    )
}

export default Nav
