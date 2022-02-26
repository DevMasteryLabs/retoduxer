import axios from "axios";
import { ADD_TODO, REMOVE_TODO, SET_TODOS, TOGGLE_TODO_COMPLETED, UPDATE_TODO } from "../types/todosTypes";
import { requestFailed, requestStarted, requestSucceeded } from "./feedbackActionCreators";

export const addTodo = (title, description, collaboratorId) => ({
    type: ADD_TODO,
    payload: {
        title,
        description,
        userId: collaboratorId
    }
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id
})

export const toggleTodoCompleted = (id) => ({
    type: TOGGLE_TODO_COMPLETED,
    payload: id
})

export const updateTodo = (id, { title, description, userId }) => ({
    type: UPDATE_TODO,
    payload: {
        id,
        title,
        description,
        userId
    }
})

export const setTodos = (todos) => ({
    type: SET_TODOS,
    payload: todos
})

export const fetchTodos = () => {
    return (dispatch, getState) => {
        dispatch(requestStarted())
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                dispatch(requestSucceeded())
                dispatch(setTodos(res.data))
            }).catch(err => {
                dispatch(requestFailed(err.message))
            })
    }
}