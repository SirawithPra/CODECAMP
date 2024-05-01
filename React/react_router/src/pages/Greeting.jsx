import React from "react";
import { useParams } from "react-router-dom";

function Greeting(){
    let {name} = useParams();
    return(
        <div>
            <h1>Hello {name}</h1>
        </div>
    )
}

export default Greeting