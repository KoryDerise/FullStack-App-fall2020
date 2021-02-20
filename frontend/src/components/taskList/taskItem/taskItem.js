import React from 'react';

const TaskItem = ({ text }) => (
  <div className="task-list__task-item">
    <div className="task-item__text">{ text }</div>
    <input type="button" value="update" />
    <input type="button" value="delete" />
  </div>
);

export default TaskItem;