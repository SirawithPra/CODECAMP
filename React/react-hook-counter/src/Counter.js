import React, { useState } from 'react'

export const Counter = () => {
    const [count, counterUpdate] = useState(0)

    console.log(useState(0))
    return (
        <div style={{ textAlign: "center" }}>
            <h3>{count}</h3>
            <div>
                <button onClick={() => counterUpdate(count + 1)}>plus</button>
                <button onClick={() => counterUpdate(count - 1)}>minus</button>
                <button onClick={() => counterUpdate(0)}>reset</button>
            </div>
        </div>
    )
}



// state class component
// state = {
//     count : 0,
//     age: 0,
//     name: "name"
// }
// compare state
// count == this.state.count

// //compare function update state
// counterUpdate("....."), ageUpdate("....."), nameUpdate("....") == this.setState({count : "....", name : "....", age: "...."})