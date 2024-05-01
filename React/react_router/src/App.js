import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Topics from './pages/Topics';
import Navbar from './components/Navbar';
import Greeting from './pages/Greeting';
import './App.css';
function App() {
  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/greeting/:name" element={<Greeting />} />
        </Routes>
      </div>
  );
}

export default App;
