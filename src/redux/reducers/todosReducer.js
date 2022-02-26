import { ADD_TODO, REMOVE_TODO, SET_TODOS, TOGGLE_TODO_COMPLETED, UPDATE_TODO } from "../types/todosTypes";

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { title, description, userId } = action.payload;
      const id = Math.floor(Math.random() * 10000).toString()
      const newTodo = {
        id,
        title,
        description,
        completed: false,
        userId
      }
      return [...state, newTodo];
    }
    case REMOVE_TODO: {
      const id = action.payload;
      return state.filter(todo => todo.id !== id);
    }
    case TOGGLE_TODO_COMPLETED: {
      const id = action.payload;
      return state.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      });
    }
    case UPDATE_TODO: {
      const {id, title, description, userId} = action.payload;
      return state.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            title,
            description,
            userId
          }
        } else {
          return todo
        }
      });
    }
    case SET_TODOS: {
      return action.payload.map(todo => ({
        ...todo,
        id: todo.id && todo.id.toString(),
        userId: todo.userId && todo.userId.toString(),
        description: todo.description ? todo.description : ""
      }));
    }
    default: {
      return state;
    }
  }
}

export default todosReducer;