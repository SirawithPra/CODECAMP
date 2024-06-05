import React from 'react'
import ThemeContext from './ThemeContext'
import UseContextChild from './UseContextChild'

const UseContext1 = () => {
  return (
    <div>
      <ThemeContext.Provider value="red">
        <UseContextChild/>
      </ThemeContext.Provider>
    </div>
  )
}

export default UseContext1
