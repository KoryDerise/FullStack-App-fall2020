import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createTask } from '../../redux/actions/taskActions';

import './addTask.css';

const AddTask = () => {
  const [textInput, setTextInput] = useState('');
  const token = useSelector(state => state.user.jwt);
  const userId = useSelector(state => state.user.userId);

  const dispatch = useDispatch();

  const handleAddTaskBtn = (e) => {
    e.preventDefault();
    if (!textInput) return;

    const newTask = {
      userId: userId,
      text: textInput,
      isComplete: false
    };

    dispatch(createTask(newTask, token));
    setTextInput('');
  };

  return ( 
    <div className="add-task-container">
      <form className="add-task__form">
        <div className="add-task__form-text">
          <input className="add-task__add-task-input" type="text" placeholder="Task..." value={ textInput } onChange={ e => setTextInput(e.target.value) } />
        </div>
        <input className="add-task__add-task-btn" type="submit" value="Add Task" onClick={ e => handleAddTaskBtn(e) } />
      </form>
    </div>
  );
}

export default AddTask;