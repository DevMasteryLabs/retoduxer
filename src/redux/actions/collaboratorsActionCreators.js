import axios from "axios";
import { ADD_COLLABORATOR, REMOVE_COLLABORATOR, SET_COLLABORATORS, UPDATE_COLLABORATOR } from "../types/collaboratorsTypes";
import { requestFailed, requestStarted, requestSucceeded } from "./feedbackActionCreators";

export const addCollaborator = ({ name, email, username, phone }) => ({
    type: ADD_COLLABORATOR,
    payload: {
        name,
        email,
        username,
        phone
    }
})

export const removeCollaborator = (id) => ({
    type: REMOVE_COLLABORATOR,
    payload: id
})

export const updateCollaborator = (id, details) => ({
    type: UPDATE_COLLABORATOR,
    payload: {
        id,
        details
    }
})


export const setCollaborators = (users) => ({
    type: SET_COLLABORATORS,
    payload: users
})

export const fetchCollaborators = () => (dispatch) => {
    dispatch(requestStarted())
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            dispatch(requestSucceeded())
            dispatch(setCollaborators(res.data))
        }).catch(err => {
            dispatch(requestFailed(err.message))
        })
}