import React from 'react'

function WhyChoseUs() {
    return (
        <div className="left-section">
            <h2>Why Chose Us</h2>
            <div className="chose-us-options-container">
                <div data-aos='zoom-in-down'>
                    <i className="fas fa-edit chose-icon"></i>
                    <p>Best Designs</p>
                </div>

                <div data-aos='zoom-in-up'>
                    <i className="fas fa-thumbs-up chose-icon"></i>
                    <p>100% flexible</p>
                </div>

                <div data-aos='zoom-in-left'>
                    <i className="fas fa-calendar-alt  chose-icon"></i>
                    <p>Accurate Timeline</p>
                </div>

                <div data-aos='zoom-in-right'>
                    <i className="fas fa-dollar-sign chose-icon"></i>
                    <p>Very Affordable</p>
                </div>
                
            </div>
        </div>
    )
}

export default WhyChoseUs
