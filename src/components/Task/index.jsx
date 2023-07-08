import React, { useState } from "react";

const Task = () => {
    
    const [tasks, setTasks] = useState([]);

    const addTask = (taskName, taskDate) => {
      const newTask = {
        name: taskName,
        date: taskDate,
      };
  
      setTasks([...tasks, newTask]);
    }
  
    return ( 
        <div className="flex w-full h-40 shadow-lg shadow-black-500/50 mb-4">
            <h5>Task</h5>
            <div>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <div>{task.name}</div>
                            <div>{task.date}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>


    )
}

export default Task