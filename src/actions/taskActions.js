import axios from 'axios';
const baseUrl = "http://localhost:443";


export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${baseUrl}/api/tasks/`,{
        headers: {
          'Content-Type': 'application/json',
        },
      });
      dispatch({
        type: 'FETCH_TASKS',
        payload: response.data,
      });
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };
};

export const createTask = (name, description) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${baseUrl}/api/tasks/`, {
        name,
        description,
        completed: false,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      dispatch({
        type: 'ADD_TASK',
        payload: response.data,
      });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };
};

export const toggleCompletion = (taskId) => {
  return async (dispatch) => {
    try {
      await axios.put(`${baseUrl}/api/tasks/${taskId}`,{
        headers: {
          'Content-Type': 'application/json',
        },
      });
      dispatch({
        type: 'TOGGLE_COMPLETE',
        payload: taskId,
      });
    } catch (error) {
      console.error('Error toggling task completion:', error);
    }
  };
};

export const deleteTask = (taskId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${baseUrl}/api/tasks/${taskId}`,{
        headers: {
          'Content-Type': 'application/json',

        },
      });
      dispatch({
        type: 'DELETE_TASK',
        payload: taskId,
      });
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
};
