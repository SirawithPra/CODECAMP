import React, {useState} from 'react';
import {Routes, Route} from "react-router-dom";
import {Context} from './Context';
import Example from './components/Example';
import Home from './Home';
import Counter from './components/Counter';
import './App.css';

function App() {
  const [state, setState] = useState({content:"Hello world!"});
  return (
    <div className="App">
      <Context.Provider value={{state, setState}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ex" element={<Example />} />
          <Route path="/cou" element={<Counter />} />

        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
