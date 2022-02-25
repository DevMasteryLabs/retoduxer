import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CollaboratorCard from '../components/CollaboratorCard';

function Collaborators() {
  const collaborators = useSelector(state => state.collaborators)
  const [email, setEmail] = useState('')
  return (
    <>
      <div className='d-flex mt-5 justify-content-end'>
        <Link to="/new-collaborator">
          <Button variant="success" type="submit">
            Add collaborator
          </Button>
        </Link>
      </div>
      <Form>
        <div className='row mt-4'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              Filter collaborators by email.
            </Form.Text>
          </Form.Group>
        </div>
      </Form>
      <div className='row mt-5 pb-5'>
        {
          collaborators.filter(c => email ? c.email.includes(email) : true).map(collaborator => <CollaboratorCard key={collaborator.id} collaborator={collaborator} />)
        }
      </div>
    </>
  )
}

export default Collaborators