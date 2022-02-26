import axios from 'axios';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalLoadingOverlay from './components/GlobalLoadingOverlay';
import Navbar from './components/Navbar';
import Collaborators from './pages/Collaborators';
import NewCollaborator from './pages/NewCollaborator';
import NewTodo from './pages/NewTodo';
import TodoDetails from './pages/TodoDetails';
import Todos from './pages/Todos';
import UpdateTodo from './pages/UpdateTodo';
import { requestFailed, requestStarted, requestSucceeded } from './redux/actions/feedbackActionCreators';
import { setTodos } from './redux/actions/todosActionCreators';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(requestStarted())
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        console.log(res);
        dispatch(requestSucceeded())
        dispatch(setTodos(res.data))
      }).catch(err => {
        console.log(err);
        console.log("msg", err.message);
        dispatch(requestFailed(err.message))
      })
  }, [])
  return (
    <>
      <GlobalLoadingOverlay />
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path='/' component={(props) => <Todos {...props} />} />
            <Route path='/new-todo' component={(props) => <NewTodo {...props} /> } />
            <Route path='/update-todo/:id' component={UpdateTodo} />
            <Route path='/todos/:id' component={(props) => <TodoDetails {...props} />} />
            <Route path='/collaborators' component={Collaborators} />
            <Route path='/new-collaborator' component={NewCollaborator} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
