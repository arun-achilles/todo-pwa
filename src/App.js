import './App.css';
import TodoItem from './components/TodoItem/TodoItem';
import AddTodo from './components/AddTodo/AddTodo';
import { useState } from 'react';

function App() {
  const [ todos, setTodos ] = useState([]);
  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos); 
  }

  const editTodo = (todoObj) => {
    todos[todoObj.idx] = todoObj.content;
    const newTodos = [...todos];
    setTodos(newTodos); 
  }

  const deleteTodo = (todoObj) => {
    todos.splice(todoObj.idx, 1);
    const newTodos = [...todos];
    setTodos(newTodos); 
  }
  return (
    <div className="App-header">
      <h2>Todo App</h2>
      <div className="todo-list">
        {todos.map((todo, idx) => (
          <div>
            <TodoItem key={idx} todoObj={{idx: idx, content: todo}} editTodo={editTodo} deleteTodo={deleteTodo} ></TodoItem>
            <br/>
          </div>
        ))}
      </div>
      <br></br>
      <AddTodo addTodo={addTodo}></AddTodo>
    </div>
   );
}

export default App;
