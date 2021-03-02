import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTasks } from '../../redux/actions/taskActions';

import AddTask from '../../components/addTask/addTask';
import TaskList from '../../components/taskList/taskList';

import './tasks.css';

const Tasks = () => {

  const userId = useSelector(state => state.user.userId);
  const token = useSelector(state => state.user.jwt);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks(userId, token));
  }, []);

  return ( 
    <div className="task-list__main-container">
      <h1>Task List</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default Tasks;