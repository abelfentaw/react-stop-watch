import React, { useState,useEffect } from "react"


function MyComponent(){
  const [count, setCount]=useState(0)
  const [color, setColor]=useState('green')
  useEffect(()=>{
    document.title=`count ${count} ${color}`
  }, [count, color])

  function addCount(){
  setCount(c=>(count + 1))
  }
    function subCount(){
  setCount(c =>(count - 1))
  }
    function colorPicker(){
  setColor(c => c === 'green' ? 'red' : 'green')
  }
return(
  <div>
    <p style={{color:color}}>count:{count}</p>
    <button onClick={addCount}>add</button>
    <button onClick={subCount}>sub</button>
    <button onClick={colorPicker}>change color</button>
  </div>
);
}
export default MyComponent