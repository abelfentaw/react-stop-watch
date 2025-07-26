import React, { useState, createContext} from "react";
import ComponentB from "./componentB";

 export const userContext = createContext()

function ComponentA(){
 const[user, setUser]= useState("Abel");
 function changeName(){
 setUser("DAGI")}
    return(
        <div className="Box">
            <h2>ComponentA</h2>
            <h2>{`Hello ${user}`}</h2>
            <button onClick={changeName}>change</button>
            <userContext.Provider value={user}>
            <ComponentB/>
            </userContext.Provider>
        </div>
    );
}
export default ComponentA