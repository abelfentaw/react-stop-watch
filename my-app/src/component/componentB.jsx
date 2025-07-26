import { useState } from "react";
import ComponentC from "./componentC";


function ComponentB(){
    return(
        <div className="Box">
            <h2>ComponentB</h2>
            <ComponentC />
        </div>
    );
}
export default ComponentB