import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    taskName: '',
    dueDate:'',
    assignedTo:''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      taskName: '',
      dueDate:'',
      assignedTo:''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        <b><i>[Task Name]:   </i></b>{todo.taskName}<b> ; <i>[Due Date]: </i></b>{todo.dueDate}<b> ; <i>[Assigned To]:  </i></b>{todo.assignedTo}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value1: todo.taskName, value2: todo.dueDate, value3: todo.assignedTo })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;