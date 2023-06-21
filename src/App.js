import React, { useState } from 'react';
import TaskForm from './components/taskForm/TaskForm';
import TaskList from './components/taskList/TaskList';


const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (name, description) => {
    const newTask = {
      id: Date.now(),
      name,
      description,
      completed: false,
      showDescription: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const toggleDescription = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, showDescription: !task.showDescription } : task
      )
    );
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        toggleDescription={toggleDescription}
      />
    </div>
  );
};

export default App;
