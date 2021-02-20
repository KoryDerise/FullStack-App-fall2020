import React from 'react';
import './addTask.css';

const AddTask = () => {
  return ( 
    <div className="add-task-container">
      <form className="add-task__form">
        <input type="text"/>
        <input type="button" value="Add Task" />
      </form>
    </div>
  );
}

export default AddTask;