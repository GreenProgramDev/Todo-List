import { useState } from "react";
// import { FaTrash } from "react-icons/fa";

const CreateTask = ({addTask}) => {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");

  //get value name
  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };
  //get value date
  const handleTaskDateChange = (e) => {
    setTaskDate(e.target.value);
  };

  const handleCreateTask = () => {
    // addTask(taskName, taskDate);
    addTask(taskName, taskDate);
    setTaskName("");
    setTaskDate("");
  };

  return (
    <div className="flex flex-col gap-2 my-2.5">
      <input
        className="h-9 text-center"
        type="text"
        placeholder="Write here"
        value={taskName}
        onChange={handleTaskNameChange}
      />
      <div className="flex gap-2 ">
        <input
          className="flex flex-1 text-center"
          type="datetime-local"
          value={taskDate}
          onChange={handleTaskDateChange}
        />
        <button
          className="flex flex-2 bg-violet-950 text-white"
          onClick={handleCreateTask}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CreateTask;
