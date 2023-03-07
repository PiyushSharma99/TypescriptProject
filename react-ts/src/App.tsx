import React from 'react';
import NewTodo from './components/NewTodo';
import  {useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';


function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodo) => (
      prevTodo.concat(newTodo)
    ))

  };

  const RemoveTodoHandler = (todoId: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div >
      <NewTodo onAddTodo={addTodoHandler}/>
      
      <Todos items={todos} onRemoveTodo={RemoveTodoHandler}/>
      
    </div>
  );
}

export default App;
