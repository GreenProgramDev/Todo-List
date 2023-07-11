const TaskGroup = ({ tasks, title }) => {
  return (
    <div className="flex w-full h-40 shadow-lg shadow-black-500/50 my-4 ">
      <h5>{title}</h5>
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
  );
};

export default TaskGroup;
