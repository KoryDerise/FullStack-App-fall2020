import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask, updateTask } from '../../../redux/actions/taskActions';

import TaskItemControls from './taskItemControls';

import './taskItem.css';

const TaskItem = ({ task }) => {
  const [completeClass, setCompleteClass] = useState('');
  const [edit, setEdit] = useState(false);
  const [textInput, setTextInput] = useState(task.text);

  const token = useSelector(state => state.user.jwt);
  const userId = useSelector(state => state.user.userId);

  const dispatch = useDispatch();
  const { _id, text, isComplete } = task;

  const handleDeleteBtn = () => {
    dispatch(removeTask(userId, _id, token));
  }

  const handleEditBtn = () => {
    setEdit(!edit);
    setTextInput(task.text);
  }

  const handleSaveBtn = () => {

    const newTask = {
      _id: _id,
      userId: userId,
      text: textInput,
      isComplete: isComplete
    };

    dispatch(updateTask(newTask, token));
    setEdit(false);
  }

  const handleCompleteBtn = () => {
    const newTask = {
      _id: _id,
      userId: userId,
      text: text,
      isComplete: !isComplete
    };

    dispatch(updateTask(newTask, token));
    checkCompleteClass();
  }

  const checkCompleteClass = () => {
    if (isComplete) setCompleteClass('--complete');
    else setCompleteClass('');
  }

  useEffect(() => {
    checkCompleteClass();
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    handleSaveBtn();
  }



  return (
    <div className="task-list__task-item">
      {
        edit ? 
        <form className="task-item__container">
          <input 
            type="text" 
            value={ textInput } 
            onChange={ e => setTextInput(e.target.value) } 
          />
          <input type="submit" className="task-item__submit-btn" onClick={ e => onSubmitHandler(e) } />
        </form> : <div className="task-item__container">
          <div className={`task-item__text${ completeClass }`}>{ text }</div>
        </div>
      }
      <TaskItemControls 
        edit={ edit } 
        handleDeleteBtn={ handleDeleteBtn } 
        handleEditBtn={ handleEditBtn } 
        handleSaveBtn={ handleSaveBtn }
        handleCompleteBtn={ handleCompleteBtn }
      />
      
    </div>
  );
}

export default TaskItem;