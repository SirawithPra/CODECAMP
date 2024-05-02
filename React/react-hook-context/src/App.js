import React, {useState} from 'react';
import './App.css';
import Home from './components/home';
import HomeContext from './components/home_context';
import Context, {Context2} from './Context';
function App() {
  const [state,setState] = useState({content: "Hello World!"});
  return (
    <Context2.Provider value={{state, setState}}>
        <HomeContext/> 
        {/* useContext */}
        <Home/>
        {/* <Context.Provider value={{state, setState}}> */}
     test
    </Context2.Provider>
  );
}

export default App;
