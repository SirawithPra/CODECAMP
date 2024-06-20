// import { useState } from 'react'

import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />  */}
      </Routes>
    </div>
  )
}

export default App
