import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTask } from '../../actions/taskActions';

const TaskForm = ({ createTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      createTask(taskName, taskDescription);
      setTaskName('');
      setTaskDescription('');
    }
  };

  return (
    <form className="form-group m-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="taskName" className="form-label">
          Task Name
        </label>
        <input
          type="text"
          className="form-control"
          id="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="taskDescription" className="form-label">
          Task Description
        </label>
        <textarea
          className="form-control"
          id="taskDescription"
          rows="3"
          style={{ overflow: 'visible' }}
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  createTask,
};

export default connect(null, mapDispatchToProps)(TaskForm);