import React from 'react'
import aboutusimage from "../../assets/images/about-1.jpg"
import aboutusimage2 from "../../assets/images/about-4.jpg"
import aboutusimage3 from "../../assets/images/about-2.jpg"
import aboutusimage4 from "../../assets/images/about-6.jpg"
import ContactUs from './ContactUs'
import Home from './Home'

const AboutUs = () => {
    return (
        <section>
            <h1 className='text-center fw-bold fst-italic'>About Us</h1>
            <br />
            <div class="container">
                <div class="row align-items-start">
                    <div class="col">
                         <h3 className='fs-2'>At Fishkart, we bring the ocean’s freshness straight to your table.
Our mission is simple: to provide high-quality, sustainably sourced seafood that you can trust for your family and business.</h3>
                    </div>
                    <div class="col">
                        <img src={aboutusimage} className='w-100 h-70 rounded-4 ' alt="jpg" />
                    </div>
                </div>
            </div> 
            <br />   
            <br />   
            <br />   
            <div class="container">
                <div class="row align-items-start">
                    <div class="col">
                         <img src={aboutusimage2} className='w-auto h-auto rounded-4' alt="jpg" />
                    </div>
                    <div class="col">
                        <h3 className='fs-2'>What started as a small local market has grown into a trusted online destination for seafood lovers. We work closely with local fishermen and trusted suppliers to ensure every fish, shrimp, and shellfish is fresh, safe, and full of flavor.</h3>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div class="container">
                <div class="row align-items-start">
                    <div class="col">
                         <h3 className='fs-2'>At Fishkart, seafood isn’t just our business — it’s our tradition.
                            For generations, our families have worked alongside local fishermen, bringing the freshest catch from the sea straight to your plate.</h3>
                    </div>
                    <div class="col">
                        <img src={aboutusimage3} className='w-100 h-70 rounded-4 ' alt="jpg" />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className='container text-center mt-4'>
                <img src={aboutusimage4} className='rounded-4 w-auto ' alt="jpg" />
                <br />
                <h3 className='fs-2 mt-4'>We rise early, before sunrise, to ensure the day’s catch is selected with care. From freshwater fish to ocean delicacies, everything we sell is handled hygienically, packed with precision, and delivered swiftly to preserve freshness.</h3>
            </div>
            <br />
            <br />
            <h3 className='fw-bold fs-1 container'>We believe seafood should be:</h3>
            <div className='container'>
                <ul className='fs-3'>
                    <li>Fresh – delivered quickly from sea to plate</li>
                    <li>Sustainable – responsibly sourced to protect our oceans</li>
                    <li>Delicious – full of flavor and nutrition</li>
                    <li>Convenient – easy to order and prepare</li>
                    <li>Accessible – quality seafood at fair prices</li>
                </ul>
                <h4 className='fs-3 text-center'>Whether you’re a home cook preparing dinner or a restaurant looking for reliable supply, we’re here to serve you with care.</h4>
            </div>
            <br />
            <h3 className='text-center fst-italic fw-bold'>Thank you for choosing Fishkart. <a href="#">We look forward to serving you!</a> </h3> 
            <br />
            <div>
                <ContactUs />
            </div>   
        </section>
        
    )
}

export default AboutUs