import React, {useState,useEffect, useRef} from "react"

function StopWatch(){
    const[isRunning, setIsRunning]= useState(false)
    const[elapsedTime, setElapsedTime]= useState(0)
    const intervalIdRef= useRef(null);
    const startTimeRef= useRef(0)

    useEffect(()=>{
    if(isRunning){
       intervalIdRef.current = setInterval(()=>{
           setElapsedTime(Date.now() - startTimeRef.current)  
        }, 10)

        return ()=> {
            clearInterval(intervalIdRef.current)
        }
    }
    }, [isRunning]);

     function start(){
       setIsRunning(true)
       startTimeRef.current= Date.now() - elapsedTime
     }
     function stop(){
       setIsRunning(false)
       
     }
     function reset(){
       setElapsedTime(0)
       setIsRunning(false)
      
     }
     function formatTime(){
        let hours = padZero(Math.floor(elapsedTime / (1000 * 60 * 60) % 60));
        let minutes = padZero(Math.floor(elapsedTime / (1000 *60) % 60));
        let seconds = padZero(Math.floor(elapsedTime / (1000) % 60));
        let miliSeconds = padZero(Math.floor((elapsedTime % 1000) / 10));
        //    hours = hours % 12 || 12
       return `${hours}:${minutes}:${seconds}:${miliSeconds}`;
     }
    function padZero(number){
        return (number < 10 ? "0" : "") + number
    }
    return(
        <div className="stop-watch">
           <div className="display">{formatTime()}</div>
           <div className="controler">
             <button onClick={start} className="start">Start</button>
             <button onClick={stop} className="stop">Stop</button>
             <button onClick={reset} className="reset">Reset</button>
           </div>
        </div>
    );
}
export default StopWatch