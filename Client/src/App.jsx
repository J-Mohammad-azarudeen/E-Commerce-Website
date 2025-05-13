import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carousal from './components/Carosual/Carousal'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar />
    <Carousal />
   </div>
  )
}

export default App
