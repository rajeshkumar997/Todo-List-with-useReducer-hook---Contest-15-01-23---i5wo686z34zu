const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        todos: [
          ...state.todos,
          {
            title: action.value,
            id:
              new Date().toLocaleDateString() +
              "" +
              new Date().toLocaleTimeString(),
          },
        ],
      };
    }
    case "DELETE": {
      return {
        todos: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export { todoReducer };
