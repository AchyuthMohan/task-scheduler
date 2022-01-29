import Header from "./components/Header";
import React from "react";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";
function App() {
  const[showAddTask,setShowAddTask]=useState(false)
  const[tasks,setTasks]=useState([
    {
        id:1,
        text:'Doctors Appointment',
        day:'Feb 5th at 2:10pm',
        remainder: true,
    },
    {
        id:2,
        text:'Ennggs Appointment',
        day:'May 5th at 2:10pm',
        remainder: false,
    },
    {
        id:3,
        text:'CA Appointment',
        day:'March 5th at 2:10pm',
        remainder: true,
    }

])
// add task
const addTask=(task)=>{
  const id=Math.floor(Math.random()*1000)+1
  console.log(id)
  const newTask={id,...task}
  setTasks([...tasks,newTask])
}
const taskAdd=()=>{
  setShowAddTask(!showAddTask)
}
// delete tasks
const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
}
const toggleRemainder=(id)=>{
  setTasks(tasks.map((task)=>task.id===id?{...task,remainde:!task.remainder}:task))
}

  return (
    <div className="container">
      <Header  taskAdder={taskAdd}title="Task Tracker" />
      {showAddTask &&<AddTask onAdd={addTask} />}
      {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/>:'No Tasks '}
      
    </div>
  );
}

export default App;
