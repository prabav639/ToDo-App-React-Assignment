import React, { useState,useEffect, useCallback } from 'react';
import TodoForm from './TodoForm';
import { getAlltodosFromDB } from "../helpers"
import Todo from './Todo';
import { RiAlignJustify } from 'react-icons/ri';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(async () => {
    const existingtodos = await getAlltodosFromDB()
    setTodos(existingtodos)
},[])

  const addTodo = todo => {
    if (!todo.taskName || /^\s*$/.test(todo.taskName)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.taskName || /^\s*$/.test(newValue.taskName)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h4><img src='../smu-icon-144x144.png'></img></h4><h1>The Delegator<h6>-[Prabav Murali]-</h6></h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;