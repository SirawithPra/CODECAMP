import React, {useContext} from "react";
import Context, {Context2} from "../Context";

const Home = ()=>{
    const {state, setState} = useContext(Context2);
    console.log({state})
    return(
        <div>
            <h1>Admin</h1>
            
                        <div className="App"> this is value of context : {state.content}
                        <br />
                        <button onClick={()=>setState({content: "Hi"})}>Change</button>
                        {/* // state is array of contexts */}
                        </div>
        </div>
    )
}

export default Home;