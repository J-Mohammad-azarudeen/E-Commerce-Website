import React from 'react'
import Carousal from '../Carosual/Carousal'
import ProductCard from '../Productcard/ProductCard.jsx'
import ContactUs from './ContactUs.jsx'

const Home = () => {
    return (
        <div>
            <Carousal />
            <ProductCard />
            <ContactUs />
        </div>
    )
}

export default Home