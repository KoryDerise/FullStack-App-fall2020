import React from 'react';

import TaskItem from './taskItem/taskItem';

import './taskList.css';

const TaskList = () => {
  return ( 
    <div className="task-list-container">
      <ul>
        <li><TaskItem text="item 1" /></li>
        <li><TaskItem text="item 2" /></li>
        <li><TaskItem text="item 3" /></li>
        <li><TaskItem text="item 4" /></li>
        <li><TaskItem text="item 5" /></li>
      </ul>
    </div>
  );
}
 
export default TaskList;