import React from 'react'
import WhyChoseUs from './miniComponents/WhyChoseUs'
import ContactForm from './miniComponents/ContactForm'
import './AboutUs.css'


function AboutUs() {
    return (
        <div className='AboutUs'>
            <div className="about-top">
                <div className="about-image-container">
                    <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="About us" className="about-image" />
                </div>
            </div>
            <h2>About LIOCAM</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsam voluptatem error suscipit, esse maiores repellat incidunt alias doloribus, eaque ex soluta! Culpa saepe harum hic, tempore nulla ea eius libero voluptatibus quia pariatur suscipit odio provident reprehenderit facere error fugit incidunt, vero dolores eveniet voluptatum vitae sapiente. Earum accusantium quasi, nihil voluptatem consequuntur a nulla aperiam praesentium soluta, voluptatibus corporis eligendi provident quaerat asperiores! Officiis rem quo praesentium nisi vel ipsa dolorem adipisci, at dicta veritatis voluptate cumque earum minima fugiat exercitationem assumenda sunt vero. Commodi fuga molestiae eius dolore cupiditate aspernatur. Asperiores fuga dignissimos unde consectetur fugiat cupiditate.
            </p>

            <h3>Our Vision</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat unde dolorem veniam voluptatum sit et explicabo voluptatibus odio facere modi. Autem doloremque obcaecati commodi neque a aperiam harum nihil illum eveniet architecto? Nobis, ipsa, cumque dolorem voluptates omnis ratione dignissimos illo quam ut et explicabo eum aut a amet ab. Ea rem alias aut quidem eos amet at quis non necessitatibus, architecto accusantium ipsum, laboriosam molestias maxime aliquam laudantium suscipit reprehenderit modi! Assumenda debitis omnis minima obcaecati mollitia delectus eveniet dolorum qui, sint quisquam ab velit, expedita, nostrum vel modi consequatur hic ratione libero. Odio esse obcaecati ducimus quas doloribus.</p>

            <h3>Our Mission</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat unde dolorem veniam voluptatum sit et explicabo voluptatibus odio facere modi. Autem doloremque obcaecati commodi neque a aperiam harum nihil illum eveniet architecto? Nobis, ipsa, cumque dolorem voluptates omnis ratione dignissimos illo quam ut et explicabo eum aut a amet ab. Ea rem alias aut quidem eos amet at quis non necessitatibus, architecto accusantium ipsum, laboriosam molestias maxime aliquam laudantium suscipit reprehenderit modi! Assumenda debitis omnis minima obcaecati mollitia delectus eveniet dolorum qui, sint quisquam ab velit, expedita, nostrum vel modi consequatur hic ratione libero. Odio esse obcaecati ducimus quas doloribus.</p>

            <h3>Our Goal</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat unde dolorem veniam voluptatum sit et explicabo voluptatibus odio facere modi. Autem doloremque obcaecati commodi neque a aperiam harum nihil illum eveniet architecto? Nobis, ipsa, cumque dolorem voluptates omnis ratione dignissimos illo quam ut et explicabo eum aut a amet ab. Ea rem alias aut quidem eos amet at quis non necessitatibus, architecto accusantium ipsum, laboriosam molestias maxime aliquam laudantium suscipit reprehenderit modi! Assumenda debitis omnis minima obcaecati mollitia delectus eveniet dolorum qui, sint quisquam ab velit, expedita, nostrum vel modi consequatur hic ratione libero. Odio esse obcaecati ducimus quas doloribus.</p>

            <section className="why-chose-us">
                <WhyChoseUs/>

                <div className="right-section">
                    <ContactForm/>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
