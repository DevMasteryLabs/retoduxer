import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updateTodo } from '../redux/actions/todosActionCreators'

export default function UpdateTodo(props) {
    const params = useParams()
    const { id } = params
    const todos = useSelector(state => state.todos)
    const collaborators = useSelector(state => state.collaborators)
    const todo = todos.find(todo => todo.id === id)
    const collaborator = todo && collaborators.find(c => c.id === todo.userId)
    const dispatch = useDispatch()
    const [title, setTitle] = useState(todo ? todo.title : '')
    const [description, setDescription] = useState(todo ? todo.description : '')
    const [userId, setUserId] = useState(todo && todo.userId)
    const handleSubmit = e => {
        e.preventDefault()
        if (title.trim()) {
            dispatch(updateTodo(id, { title, description, userId }))
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
                <Form.Select value={userId} onChange={event => setUserId(event.target.value)}>
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
                    <span>Modify</span>
                </Button>
            </div>
        </Form>
    )
}
