import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default App;