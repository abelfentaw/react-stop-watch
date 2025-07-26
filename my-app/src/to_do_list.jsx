import { useState } from "react";

function ToDoList(){
    const [tasks, setTasks]= useState(["eat breakfast", "take a shower"])
    const [newTask, setNewTask]=useState("")

    function handlerInputChange(event){
      setNewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim() !== ""){
     setTasks(t =>([...t, newTask]))
     setNewTask("")}
    }
    function deleteTask(index){
     setTasks(T=>T.filter((_,i)=>i!==index))
    }
    function moveTaskUp(index){
        if(index>0){
            const updateTask= [...tasks];
            [updateTask[index], updateTask[index-1]] = 
            [updateTask[index-1], updateTask[index]];
            console.log(updateTask[index])
            setTasks(updateTask)
        }

    }
    function moveTaskDown(index){
         if(index<tasks.length){
            const updateTask= [...tasks];
            [updateTask[index], updateTask[index+1]] = 
            [updateTask[index+1], updateTask[index]];
            setTasks(updateTask)
        }
    }

    return(
    <div className="to-do-list">
     <h1>To-Do-List</h1>
       <div>
         <input
           type="text"
           id="addTask"
           value={newTask} 
           onChange={handlerInputChange}
           placeholder="enter new task..." />

           <button onClick={addTask} className="add-task">add task</button>
        </div>

        <ol>
            {tasks.map((task,index) =>
            <li key={index}>
                <span className="delete-button">
                    {task}
                </span>
                <button className="delete-task" onClick={()=>deleteTask(index)}>Delete</button>
                <button className="move-task" onClick={()=>moveTaskUp(index)}>Up</button>
                <button className="move-task" onClick={()=>moveTaskDown(index)}>Down</button>
            </li>)}
        </ol>
    </div>);
}

export default ToDoList