import { useState, useContext } from "react";
import { userContext } from "./componentA";
function ComponentD(){
 const user = useContext(userContext)
    return(
        <div className="Box">
            <h2>ComponentD</h2>
            <h2>{`Bye ${user} `}</h2>
        </div>
    );
}
export default ComponentD