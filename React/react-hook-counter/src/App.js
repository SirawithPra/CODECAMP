import React , {useState} from 'react';
import './App.css';

function App() {
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

export default App;
