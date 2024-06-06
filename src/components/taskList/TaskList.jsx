import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  fetchTasks,
  toggleCompletion,
  deleteTask,
} from "../../actions/taskActions";

const TaskList = ({ tasks, fetchTasks, toggleCompletion, deleteTask }) => {
  const [openTaskIds, setOpenTaskIds] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleToggleCompletion = (taskId) => {
    toggleCompletion(taskId);
    //window.location.reload();
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
    //window.location.reload();
  };

  const handleToggleDescription = (taskId) => {
    if (openTaskIds.includes(taskId)) {
      setOpenTaskIds(openTaskIds.filter((id) => id !== taskId));
    } else {
      setOpenTaskIds([...openTaskIds, taskId]);
    }
  };

  return (
    <div>
      <h3 className="fw-bold text-center">Tasks List</h3>
      <ul className="list-group">
        {tasks.length === 0 && (
          <p className="text-center text-success">
            add your first task with the form above ..
          </p>
        )}
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
                <>
                  {task.completed ? (
                    <label className="form-check-label text-decoration-line-through">
                      {task.name.length > 50
                        ? task.name.substr(0, 50) + "..."
                        : task.name}
                    </label>
                  ) : (
                    <label className="form-check-label">
                      {task.name.length > 50
                        ? task.name.substr(0, 50) + "..."
                        : task.name}
                    </label>
                  )}
                </>
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
            {openTaskIds.includes(task._id) && (
              <div
                style={{
                  border: "0.5px solid",
                  wordWrap: "break-word",
                  padding: "10px",
                }}
              >
                <hr />
                <p style={{ fontSize: "1.2rem" }}>
                  <span className="fw-bold">Title: </span> {task.name}
                </p>
                <p className="fw-bold">Description:</p>
                <div>{task.description}</div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
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
