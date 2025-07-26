import { useState } from "react";
import ComponentD from "./componentD";


function ComponentC(){

    return(
        <div className="Box">
            <h2>ComponentC</h2>
            <ComponentD />
        </div>
    );
}
export default ComponentC