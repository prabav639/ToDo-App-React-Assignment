import React, { useState, useEffect, useRef } from 'react';
import { addtodosToDB } from '../helpers';


function TodoForm(props) {
  /**
 * {
 *   id: '',
 *   taskName: '',
 *   dueDate: '',
 *   assignedTo: ''
 * }
 */

  const [taskNameInput, setTaskName] = useState('');
  const [dueDateInput, setDueDate] = useState('');
  const [assignedToInput, setAssignedTo] = useState('');

  const taskNameInputRef = useRef(null);
  const dueDateInputRef = useRef(null);
  const assignedToInputRef = useRef(null);

  const submitForm = async () => {
    await addtodosToDB(taskNameInput,dueDateInput,assignedToInput)
  }

  useEffect(() => {
    taskNameInputRef.current.focus();
  }, []);

  const changeTaskName = e => {
    setTaskName(e.target.value);
  };

  const changeDueDate = e => {
    setDueDate(e.target.value);
  };

  const changeAssignedTo = e => {
    setAssignedTo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100),
      taskName: taskNameInput,
      dueDate: dueDateInput,
      assignedTo: assignedToInput
    });
    setTaskName('');
    setDueDate('');
    setAssignedTo('');

  };

  return (
    <form className='todo-form'>
      {props.edit ? (
        <div style={{ display: 'flex', padding: '0 20px' }}>
          <input
            placeholder='Update Task Name'
            value={taskNameInput}
            onChange={changeTaskName}
            name='text'
            className='todo-input'
            ref={taskNameInputRef}
          />
          <input
            placeholder='Update Due Date'
            value={dueDateInput}
            onChange={changeDueDate}
            name='text'
            className='todo-input'
            ref={dueDateInputRef}
          />
          <input
            placeholder='Update Assignee Name'
            value={assignedToInput}
            onChange={changeAssignedTo}
            name='text'
            className='todo-input'
            ref={assignedToInputRef}
          />
          <button className='todo-button edit' onClick={() => submitForm()}>
            Update
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', padding: '0 20px' }}>
          <input
            placeholder='Task Name'
            value={taskNameInput}
            onChange={changeTaskName}
            name='text'
            className='todo-input'
            ref={taskNameInputRef}
          />
          <input
            placeholder='Due Date'
            value={dueDateInput}
            onChange={changeDueDate}
            name='text'
            className='todo-input'
            ref={dueDateInputRef}
          />
          <input
            placeholder='Assigned To'
            value={assignedToInput}
            onChange={changeAssignedTo}
            name='text'
            className='todo-input'
            ref={assignedToInputRef}
          />
          <button className='todo-button' onClick={() => submitForm()}>
            Add to List..
          </button >
        </div>
      )}
    </form>
  );
}

export default TodoForm;