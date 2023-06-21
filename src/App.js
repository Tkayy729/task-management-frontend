import React from "react";
import TaskForm from "./components/taskForm/TaskForm";
import TaskList from "./components/taskList/TaskList";

const App = () => {



  return (
    <div className="container p-5">
      <h1>Task Manager</h1>
      <TaskForm  />
      <TaskList />
    </div>
  );
};



export default App;
