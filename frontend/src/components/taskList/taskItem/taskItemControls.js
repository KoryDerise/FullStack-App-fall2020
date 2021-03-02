import React from 'react';

const TaskItemControls = ({ edit, handleDeleteBtn, handleEditBtn, handleSaveBtn, handleCompleteBtn }) => {
  return ( 
    <>
    {
      edit ?
      <>
        <button className="task-item__control-btn save-btn" onClick={ handleSaveBtn }><i class="fas fa-save"></i></button>
        <button className="task-item__control-btn cancel-btn" onClick={ handleEditBtn }><i class="fas fa-ban"></i></button>
      </>
      :
      <>
        <button className="task-item__control-btn edit-btn" onClick={ handleEditBtn }><i class="fas fa-edit"></i></button>
        <button className="task-item__control-btn delete-btn" onClick={ handleDeleteBtn }><i class="fas fa-trash-alt"></i></button>
        <button className="task-item__control-btn complete-btn" onClick={ handleCompleteBtn }><i class="fas fa-check"></i></button>
      </>
    }
    </>
  );
}

export default TaskItemControls;