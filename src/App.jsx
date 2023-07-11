import { useState } from "react";
import "./App.css";
import CreateTask from "./components/CreatTask";
import TaskGroup from "./components/TaskGroup";
import Header from "./components/Header";
import Footer from "./components/footer";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName, taskDate) => {
    const newTask = {
      name: taskName,
      date: taskDate,
      status: 'pending', // 'in-progress' 'done'
    };
    setTasks([...tasks, newTask]);
  };

  const filterStatus = (status ) => {

    return tasks.filter((value) => value.status == status )

  }

  return (
    <>
      <div className="flex flex-col w-full h-full">
        <Header />
        <CreateTask addTask={addTask} />
        <TaskGroup title="Task" tasks={filterStatus('pending')} />
        <TaskGroup title="In Progress" tasks={filterStatus('in-progress')} />
        <TaskGroup title="Done" tasks={filterStatus('done')} />
        <Footer />
      </div>
    </>
  );
}

export default App;
