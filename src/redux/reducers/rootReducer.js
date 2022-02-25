import { combineReducers } from "redux";

import todosReducer from "./todosReducer";
import collaboratorsReducer from "./collaboratorsReducer";
import feedbackReducer from "./feedbackReducer";

const rootReducer = combineReducers({
    todos: todosReducer,
    collaborators: collaboratorsReducer,
    feedback: feedbackReducer
})

export default rootReducer;