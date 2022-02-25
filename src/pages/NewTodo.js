import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/actions/todosActionCreators'

export default function NewTodo(props) {
    const dispatch = useDispatch()
    const collaborators = useSelector(state => state.collaborators)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [collaboratorId, setCollaboratorId] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        if (title.trim()) {
            dispatch(addTodo(title, description, collaboratorId))
            props.history.push('/')
        }
    }
    return (
        <Form className='mt-5' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Todo Title</Form.Label>
                <Form.Control value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="What is your new todo title ?" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Todo Description</Form.Label>
                <Form.Control value={description} onChange={e => setDescription(e.target.value)} as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Collaborator</Form.Label>
                <Form.Select value={collaboratorId} onChange={event => setCollaboratorId(event.target.value)}>
                    <option value="" ></option>
                    {
                        collaborators.map(collaborator => (
                            <option key={collaborator.id} value={collaborator.id}> {collaborator.name} ({collaborator.email}) </option>
                        ))
                    }
                </Form.Select>
            </Form.Group>
            <div className='d-flex justify-content-center'>
                <Button variant='outline-primary' type='submit'>
                    <i className="bi bi-plus-circle-fill"></i>
                    <span className="ms-2">Add Todo</span>
                </Button>
            </div>
        </Form>
    )
}
