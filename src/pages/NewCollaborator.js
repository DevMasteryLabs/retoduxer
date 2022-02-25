import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addCollaborator } from '../redux/actions/collaboratorsActionCreators'

export default function NewCollaborator(props) {
    const dispatch = useDispatch()
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        username: '',
        phone: ''
    })
    const handleSubmit = e => {
        e.preventDefault()
        const { name, email, username, phone } = formValues
        if (name.trim() && email.trim() && username.trim() && phone.trim()) {
            dispatch(addCollaborator(formValues))
            props.history.push('/collaborators')
        }
    }
    const handleFormValueChange = (event) => {
        setFormValues(prevFormValues => ({
            ...prevFormValues,
            [event.target.name]: event.target.value
        }))
    }
    return (
        <Form className='mt-5' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                    value={formValues.name} 
                    name="name"
                    onChange={handleFormValueChange} 
                    type="text" 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    value={formValues.email} 
                    name="email"
                    onChange={handleFormValueChange} 
                    type="email" 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    value={formValues.username} 
                    name="username"
                    onChange={handleFormValueChange} 
                    type="text" 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Phone number</Form.Label>
                <Form.Control 
                    value={formValues.phone} 
                    name="phone"
                    onChange={handleFormValueChange} 
                    type="phone" 
                />
            </Form.Group>
            <div className='d-flex justify-content-center'>
                <Button variant='outline-success' type='submit'>
                    <i className="bi bi-person-plus-fill"></i>
                    <span className="ms-2">Add</span>
                </Button>
            </div>
        </Form>
    )
}
