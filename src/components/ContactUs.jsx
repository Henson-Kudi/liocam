import React from 'react'
import './ContactUs.css'
import ContactForm from './miniComponents/ContactForm'

function ContactUs() {
    return (
        <div className='ContactUs'>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14525.618019295995!2d54.370762019775384!3d24.4714376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1635190198591!5m2!1sen!2sae" width="100%" height="300vh" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
            </div>

            <div className="why-chose-us">
                <div className="contact-left">
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

                <div className="right-section">
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
