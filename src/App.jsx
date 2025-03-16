import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './add-task'
import TaskList from './task-list'


function App() {
  const [tasks, addTask] = useState([]);

  const addNewTask = (newTask) => {
    addTask([...tasks, newTask]);
  }

  return (
    <>
      <Task addNewTask={addNewTask}/>
      <TaskList tasks={tasks} />
    </>
  )
}

export default App
