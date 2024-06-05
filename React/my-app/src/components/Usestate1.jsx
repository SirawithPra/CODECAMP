import React, { useState } from 'react'

export default function UseState1() {

  const [count, setCount] = useState(0);
  const [title, setTitles] = useState("");

  return (
    <div className="text" style={{textAlign:'center'}}>
      <div className="container">
        <button onClick={()=>{setCount(count+1);
          setTitles("Action Add completed");
        }}>ADD</button>
        <button onClick={()=>{setCount(count-1);
          setTitles("Action Sub completed");
        }}>SUB</button>
        <button onClick={()=>{setCount(0)
            setTitles("Reset completed");
        }}>RESET</button>
        <p>UseState : {count}</p>
        <p>Status : {title}</p>
      </div>
    </div>
  )
}
