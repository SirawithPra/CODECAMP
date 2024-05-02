import React, {useReducer,useState} from "react";

const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {...state, counter: state.counter + 1 };
        case 'decrement':
            return {...state, counter: state.counter - 1 };
        case'reset':
            return {...state, counter: 0};
        case'addText':
            return {...state, text : [...state.text,action.text]};
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer,{counter: 0, text :[]});
    const [text, setText] = useState("");
    
    return(
        <div style={{textAlign: "center"}}>
            {state.counter}
            <br/>
            <div>
                <button onClick={()=>dispatch({type: "increment"})}> + </button>
                <button onClick={()=>dispatch({type: "decrement"})}> - </button>
                <button onClick={()=>dispatch({type: "reset"})}> reset </button>
            </div>
            <br/>
            <div>
                <form onSubmit={e=>{
                    e.preventDefault();
                    dispatch({type: "addText", text: text});
                    setText("");
                    }}>
                    <input type="text" value={text} onChange={(event)=>setText(event.target.value)}/>
                </form>
                {/* <button onClick={()=>dispatch({type: "addText", text: text})}> add text </button> */}
            </div>
            <br/>
                <ul>
                    {state.text.map(text =><li>{text}</li>)}
                </ul>
        </div>
    )
}

export  default Counter