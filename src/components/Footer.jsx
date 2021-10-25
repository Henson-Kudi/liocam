import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/liocam-logo.jpg'
import './Footer.css'

function Footer() {
    const thisYear = new Date().getFullYear()
    return (
        <div className="Footer">
            <div className="footer-grid-container">
                <div className="left-section">
                    <div className="grid-control">
                        <div className="logo-section">
                            <img src={logo} alt="company logo" />
                        </div>
                        <h3>Liocam</h3>
                    </div>

                    <div className="grid-control">
                        <i className="far fa-envelope footer-icon"></i>
                        <p>company@email.com</p>
                    </div>

                    <div className="grid-control">
                        <i className="fas fa-phone-alt footer-icon"></i>
                        <p>+123456789</p>
                    </div>

                    <div className="grid-control">
                        <i className="fab fa-whatsapp footer-icon"></i>
                        <p>+123456789</p>
                    </div>

                    <div className="grid-control">
                        <i className="fas fa-map-marker-alt footer-icon"></i>
                        <div>
                            <p>abc street, xyz quarter</p>
                            <p>Douala,  Cameroon</p>
                        </div>
                    </div>
                </div>

                <div className="middle-section sitemaps">
                    <p>
                        <Link to='/about-us'>About us</Link>
                    </p>
                    <p>
                        <Link to='/our-services'>Our Services</Link>
                    </p>
                    <p>
                        <Link to='/contact-us'>Contact Us</Link>
                    </p>
                    <p>
                        <Link to='/privacy-policy'>Privacy Policy</Link>
                    </p>
                </div>

                <div className="right-section social-media">
                    <div>
                        <div className="grid-control">
                            <a href="facebook.com" target='_blank'>
                                <i className="fab fa-facebook footer-icon"></i>
                            </a>
                            <p><a href="https://facebook.com" target='_blank' rel="noreferrer">
                                Facebook
                            </a></p>
                        </div>

                        <div className="grid-control">
                            <a href="instagram.com" target='_blank'>
                                <i className="fab fa-instagram footer-icon"></i>
                            </a>
                            <p><a href="instagram.com" target='_blank' rel="noreferrer">
                                Instagram
                            </a></p>
                        </div>

                        <div className="grid-control">
                            <a href="twitter.com" target='_blank' rel="noreferrer">
                                <i className="fab fa-twitter footer-icon"></i>
                            </a>
                            <p><a href="twitter.com" target='_blank'>
                                Twitter
                            </a></p>
                        </div>

                        <div className="grid-control">
                            <a href="youtube.com" target='_blank' rel="noreferrer">
                                <i className="fab fa-youtube footer-icon"></i>
                            </a>
                            <p><a href="youtube.com" target='_blank' rel="noreferrer">
                                Youtube
                            </a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right">
                <p>
                    &copy; Copyright {thisYear}. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer
