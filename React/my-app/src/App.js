import React, { useState } from 'react'
import UseState1 from './components/Usestate1.jsx'
import UseEffect1 from './components/UseEffect1.jsx'
import UseContext1 from './components/UseContext1.jsx'

const App = () => {
  const [isShow,setShow] = useState(true)
  return (
    <div>
      <UseState1/>
      {isShow&&<UseEffect1/>}
      <button onClick={()=>{setShow(false)}}>Hide UseEffect</button>
      <UseContext1/>
    </div>
  )
}

export default App
