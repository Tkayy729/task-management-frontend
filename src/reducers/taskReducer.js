const initialState = {
    tasks: [],
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TASKS':
        return {
          ...state,
          tasks: action.payload,
        };
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case 'TOGGLE_COMPLETE':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload
              ? { ...task, completed: !task.completed }
              : task
          ),
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
      case 'TOGGLE_DESCRIPTION':
        console.log("herrrr")
        return {
          ...state,
          tasks: state.tasks.map((task) => 
           
            task.id === action.payload
              ? { ...task, showDescription: !task.showDescription }
              : task
        ),
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  