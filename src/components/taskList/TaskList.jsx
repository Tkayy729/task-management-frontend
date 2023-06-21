import React from 'react';

const TaskList = ({ tasks, toggleComplete, deleteTask, toggleDescription }) => {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          className={`list-group-item ${task.completed ? 'completed' : ''}`}
          key={task.id}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              <span
                className="task-name ms-2 text-truncate"
                onClick={() => toggleComplete(task.id)}
              >
                {task.name.length > 90 ? `${task.name.slice(0, 50)}...` : task.name}
              </span>
            </div>
            <div>
              <button
                className="btn btn-sm btn-secondary me-2"
                onClick={() => toggleDescription(task.id)}
              >
                {task.showDescription ? 'Hide Description' : 'Show Description'}
              </button>
              <button
                className="btn btn-link text-danger"
                onClick={() => deleteTask(task.id)}
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </div>
          {task.showDescription && (
            <div className="mt-2">
                <hr />
              <p style={{ overflow: 'visible' }}>TITLE: {task.name}</p>
              <p style={{ overflow: 'visible' }}>{task.description}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
