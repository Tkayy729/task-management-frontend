import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  fetchTasks,
  toggleCompletion,
  deleteTask,
} from "../../actions/taskActions";

const TaskList = ({
  tasks,
  fetchTasks,
  toggleCompletion,
  deleteTask,
  actionId,
}) => {
  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks, actionId]);

  const handleToggleCompletion = (taskId) => {
    toggleCompletion(taskId);
    window.location.reload();
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
    window.location.reload();
  };

  const handleToggleDescription = (taskId) => {
    tasks.map((task) =>
      task._id === taskId ? setShowDesc(!showDesc) : showDesc
    );
  };
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li className="list-group-item" key={task._id}>
          <div className="d-flex align-items-center justify-content-between">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleCompletion(task._id)}
              />
              <label className="form-check-label">
                {task.name.length > 50
                  ? task.name.substr(0, 50) + "..."
                  : task.name}
              </label>
            </div>
            <div className="task-icons">
              <i
                className="bi bi-eye-fill"
                onClick={() => handleToggleDescription(task._id)}
              ></i>
              <i
                className="bi bi-trash-fill px-4"
                onClick={() => handleDeleteTask(task._id)}
              ></i>
            </div>
          </div>
          {showDesc && (
           <div style={{ border: '0.5px solid', padding: '10px' }}>
           <hr />
           <p style={{ fontSize: '1.2rem'}}>
           <span className="fw-bold">Title :</span>  {task.name}
           </p>
           <p className="fw-bold">Description:</p>
           <div style={{ wordWrap: 'break-word' }}>
             {task.description}
           </div>
         </div>
  
          )}
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  fetchTasks,
  toggleCompletion,
  deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
