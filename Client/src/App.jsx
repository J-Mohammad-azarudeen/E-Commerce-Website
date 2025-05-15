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
import Productcard from './components/Productcard/Productcard.jsx'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/products' Component={Products} />
          <Route exact path='/login' Component={Login} />
          <Route exact path='/signup' Component={SignUp} />
          <Route exact path='/cart' Component={Cart} />
          <Route exact path='/wishlist' Component={WishList} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App