import React from 'react'
import ThemeContext from './ThemeContext'

const UseContextChild = () => {
    const cc = React.useContext(ThemeContext);
  return (
    <div>
      <ThemeContext.Cosumer>
        {color =>{ 
            <h1 style={{color}}>Color is {color}</h1>
        }}
      </ThemeContext.Cosumer>
      <h2>{cc}</h2>
    </div>
  )
}

export default UseContextChild
