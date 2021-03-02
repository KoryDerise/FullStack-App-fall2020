import React from 'react';
import { useSelector } from 'react-redux';

import TaskItem from './taskItem/taskItem';

import './taskList.css';

const TaskList = () => {
  const tasks = useSelector(state => state.task.tasks);

  return ( 
    <div className="task-list-container">
      <ul className="task-list">
        {
          tasks.map(task => {
            return <li><TaskItem task={ task } /></li>;
          })
        }
      </ul>
    </div>
  );
}

export default TaskList;