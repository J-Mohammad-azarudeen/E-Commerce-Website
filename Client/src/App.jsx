import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Carousal from './components/Carosual/Carousal'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home'
import Products from './components/Pages/Products'
import Login from './components/Pages/Login'
import SignUp from './components/Pages/SignUp'
import Cart from './components/Pages/Cart'
import WishList from './components/Pages/WishList'
import Productcard from './components/Productcard/ProductCard.jsx'
import AboutUs from './components/Pages/AboutUs.jsx'
import ContactUs from './components/Pages/ContactUs.jsx'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App