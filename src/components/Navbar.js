import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'

export default function AppNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img src="/img/todo-logo.png" alt="app-logo" width={40} />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink exact className="nav-link" to="/">Todos</NavLink>
                    <NavLink className="nav-link" to="/collaborators">Collaborators</NavLink>
                    <NavLink className="nav-link" to="/new-todo">New Todo</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}
