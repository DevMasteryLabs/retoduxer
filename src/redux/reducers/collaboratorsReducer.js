import { ADD_COLLABORATOR, REMOVE_COLLABORATOR, SET_COLLABORATORS, UPDATE_COLLABORATOR } from "../types/collaboratorsTypes";

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLLABORATOR: {
      const newUser = action.payload;
      newUser.id = Math.floor(Math.random() * 10000).toString()
      return [...state, newUser];
    }
    case REMOVE_COLLABORATOR: {
      const id = action.payload;
      return state.filter(collaborator => collaborator.id !== id);
    }
    case UPDATE_COLLABORATOR: {
      const {id, details} = action.payload;
      return state.map(collaborator => {
        if (collaborator.id === id) {
          return {
            ...collaborator,
            ...details
          }
        } else {
          return collaborator
        }
      });
    }
    case SET_COLLABORATORS: {
      return action.payload.map(user => ({
        ...user,
        id: user.id && user.id.toString()
      }));
    }
    default: {
      return state;
    }
  }
}

export default todosReducer;