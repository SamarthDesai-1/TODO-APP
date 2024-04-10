import { useState } from 'react';
import './App.css';
import AllTasks from './Components/AllTasks';
import Heading from './Components/Heading';
import MainContainer from './Components/MainContainer';
import TodoInput from './Components/TodoInput';
import Clock from './Components/Clock';
import Message from './Components/Message';

function App() {

  const [todo, setTodo] = useState([]);

  const addTodo = (task) => {
    setTodo([...todo, task]);
  };

  const deleteTodo = (idx) => {
    console.log("Todo Deleted : ", idx);
    const newTodos = todo.filter((todoItem, index) => index !== idx);
    setTodo(newTodos);
  };

  return (
    <>
      <div className="container">
        <MainContainer>

          <div className="row">
            <div className="col timer">
              <h1><Clock></Clock></h1>
            </div>
          </div>

          <div className="row style-row">
            <div className="col-4 all-tasks">
              <Heading></Heading>
              <TodoInput addTodo={addTodo}></TodoInput>
            </div>
            <div className="col-6 all-tasks">
              {todo.length === 0 ? <Message></Message> : <AllTasks todo={todo} deleteTodo={deleteTodo}></AllTasks>}
            </div>
          </div>
        </MainContainer>
      </div>
    </>
  );
}

export default App;
