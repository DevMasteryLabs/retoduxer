import React from 'react'
import { Alert, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function TodoDetails(props) {
  const todos = useSelector(state => state.todos)
  const id = props.match.params.id
  const todo = todos.find(t => t.id === id)
  return (
    <div className='mt-5'>
      {
        todo ? (
          <Table bordered>
            <tbody>
              <tr>
                <td>Title</td>
                <td> {todo.title} </td>
              </tr>
              <tr>
                <td>Description</td>
                <td> {todo.description} </td>
              </tr>
            </tbody>
          </Table>
        ) : (
          <Alert variant='danger'>
            ToDo not found
          </Alert>
        )
      }
    </div>
  )
}
