import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import DeleteTodoModal from '../components/DeleteTodoModal'
import { toggleTodoCompleted } from '../redux/actions/todosActionCreators'

export default function Todos(props) {
    const todos = useSelector(state => state.todos)
    const collaborators = useSelector(state => state.collaborators)
    const dispatch = useDispatch()
    return (
        <div className='mt-5'>
            <ListGroup>
                {todos.map(todo => {
                    let collaborator = collaborators.find(c => c.id === todo.userId)
                    return (
                        <ListGroup.Item
                            variant={todo.completed ? "secondary" : "primary"}
                            key={todo.id}
                        >
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    {
                                        todo.completed
                                            ? <i className="bi bi-check-square-fill fs-3 text-secondary btn" onClick={() => dispatch(toggleTodoCompleted(todo.id))}></i>
                                            : <i className="bi bi-square fs-3 text-secondary btn" onClick={() => dispatch(toggleTodoCompleted(todo.id))}></i>
                                    }
                                    <span className={`${todo.completed ? "text-decoration-line-through" : ""}`}>{todo.title}</span>
                                </div>
                                <div>
                                    <Link to={`/todos/${todo.id}`}>
                                        <i className="bi bi-eye-fill fs-3 text-primary btn"></i>
                                    </Link>
                                    <Link to={`/update-todo/${todo.id}`}>
                                        <i className="bi bi-pencil-square fs-3 text-info btn"></i>
                                    </Link>
                                    <DeleteTodoModal todo={todo} />
                                </div>

                            </div>
                            <div className="ps-5">
                                {collaborator
                                    ? <p>Assigned to: <span className='fw-bold'> {collaborator.name} </span> <span className="badge bg-primary"> {collaborator.email} </span> </p>
                                    : <p>Not Assigned</p>
                                }

                            </div>
                        </ListGroup.Item>
                    )
                })}
            </ListGroup>
        </div>
    )
}
