import { ADD_COLLABORATOR, REMOVE_COLLABORATOR, SET_COLLABORATORS, UPDATE_COLLABORATOR } from "../types/collaboratorsTypes";

export const addCollaborator = ({name, email, username, phone}) => ({
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