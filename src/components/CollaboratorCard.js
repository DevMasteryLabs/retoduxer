import React from 'react'
import Card from 'react-bootstrap/Card'

function CollaboratorCard({ collaborator }) {
    return (
        <div className='col-sm-6 col-md-4 col-sm-3 mb-4'>
            <Card>
                <Card.Img variant="top" src={`https://robohash.org/${collaborator.username}`} />
                <Card.Body>
                    <Card.Title> {collaborator.name} </Card.Title>
                    <Card.Text className="mb-0"> {collaborator.email} </Card.Text>
                    <Card.Text className="mb-0"> {collaborator.username} </Card.Text>
                    <Card.Text> {collaborator.phone} </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    )
}

export default CollaboratorCard