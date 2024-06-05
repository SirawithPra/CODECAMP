import { cleanup } from '@testing-library/react';
import React, { useEffect, useState } from 'react'

export default function UseEffect1() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        // This will run every time 'count' changes
        if (count > 0) {
          console.log(`Count is greater than 0 : ${count}`);
        }
        document.title = 'Current count,Effect Count : '   + count

        return () =>{
            document.title = "Destroyed"
            console.log("Destroyed")
            }
      }, [count]);
    
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>ADD</button>
    </div>
  )
}
