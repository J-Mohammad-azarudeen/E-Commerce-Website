import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carousal from './components/Carosual/Carousal'
import Navbar from './components/Navbar/Navbar'
import ProductCard from './components/Productcard/Productcard.jsx'

function App() {
  const [count, setCount] = useState(0)
  const sampleProduct = {
name: 'Wireless Headphones',
price: 59.99,
imageUrl: 'https://via.placeholder.com/300x200?text=Product+Image',
};

  return (
  <div>
    <Navbar />
    <Carousal />
   
   
  </div>
  )
}

export default App
