import { useState } from "react";


function ColorPicker(){
const [color, setColor]=useState("rgba(239, 134, 134, 1)")
function handlerColor(event)
{
    setColor(event.target.value)
}
    return(
        <div className="color-picker">
            <h1>Color picker</h1>
          {/* <p>select color:{color}</p> */}
          <div className="color-display" style={{backgroundColor:color}}>
             <p>select color:{color}</p>
          </div>
            <label> Select Color: </label>
            <input type="color" value={color} onChange={handlerColor}/>
        </div>
    );
}
export default ColorPicker