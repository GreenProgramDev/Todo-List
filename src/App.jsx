import React, { useState } from 'react'
import './App.css'
import CreatTask from './components/CreatTask'
import Done from './components/Done'
import Header from './components/Header'
import Task from './components/Task'
import Footer from './components/footer'

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (taskName, taskDate) => {
    const newTask = {
      name: taskName,
      date: taskDate,
    };

    setTasks([...tasks, newTask]);
  };



  return (
    <>
      <div className='flex flex-col w-full h-full' >
        <Header/>
        <CreatTask addTask={addTask} />
        <Done/>
        <Task tasks={tasks}/>
        <Footer/>
      </div>
    </>
  )
}

export default App
