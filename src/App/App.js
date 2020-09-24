import React, { Component } from 'react';
import './App.scss';
import StudentList from './modules/StudentList';
import GroupList from './modules/GroupList';
import TrainerList from './modules/TrainerList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList />
        <TrainerList />
        <StudentList />
      </div>
    );
  }
}

export default App;
