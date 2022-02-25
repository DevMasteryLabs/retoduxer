import { combineReducers } from "redux";

import todosReducer from "./todosReducer";
import collaboratorsReducer from "./collaboratorsReducer";

const rootReducer = combineReducers({
    todos: todosReducer,
    collaborators: collaboratorsReducer
})

export default rootReducer;