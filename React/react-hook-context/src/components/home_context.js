import React, {useContext} from "react";
import Context, {Context2} from "../Context";

const HomeContext = ()=>{
    const obj = useContext(Context2);
    console.log({...obj})
    return(
        <div>
            <h1>Admin</h1>
            <Context2.Consumer>
                {({state,setState})=>(
                        <div className="App"> this is value of context : {state.content}
                        <br />
                        <button onClick={()=>setState({content: "Hi"})}>Change</button>
                        </div>
                        // state is array of contexts
                 )}
            </Context2.Consumer>
        </div>
    )
}

export default HomeContext;