import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import LoginAndRegister from './pages/loginAndRegister/loginAndRegister';
import Tasks from './pages/tasks/tasks';

function App() {
  return (
    <div className="app">
      <h1 className="app__main-header">Track Those Tasks!</h1>
      <div className="content-container">
        <Switch>

          <Route exact path='/'>
            <LoginAndRegister />
          </Route>

          <Route path='/tasks'>
            <Tasks />
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
