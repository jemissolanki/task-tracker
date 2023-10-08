import Header from "./Header";
import Tasks from "./Tasks";
import Addtask from "./Addtask";
import React from 'react'
import { useState } from 'react'


function App() {
//to work add button to show forms toggle
const [showAddTask,setShowAddTask]= useState (false) 

  //we use state here so that we can use it in other components also
  const [tasks, setTasks] =useState ([
    {
        id: 1,
        text:'doctors appointment',
        day:'jan 5 at 4:30pm',
        reminder: true,
    },
{
        id: 2,
        text:'school meeting',
        day:'jan 3 at 3:30pm',
        reminder: true,
    },
{
        id: 3,
        text:'food shopping',
        day:' jan 5 at 5:30pm',
        reminder: false,
    }

])

//add task
const addTask =(task)=>{
  const id = Math.floor (Math.random() * 1000 ) + 1

  const newTask ={id, ...task}
  setTasks([...tasks,newTask])
}


//delete tasks 
const deleteTask =(id)=>{
  setTasks(tasks.filter((task) => task.id !==id))  

}

//toggle reminder 

const toggleReminder = (id) =>{
setTasks (
  tasks.map((task)=> 
  task.id === id ? {...task,reminder: !task.reminder} : task)
)
} 

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask (! showAddTask)} showAdd={showAddTask}/>
      {showAddTask && < Addtask onAdd={addTask}/>}
      {  tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To show'}
    </div>
  );
}

export default App;
