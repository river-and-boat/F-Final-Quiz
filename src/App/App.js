import React, { Component } from 'react';
import './App.scss';
import GroupList from './modules/GroupList';
import StudentList from './modules/StudentList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList />
        <StudentList />
      </div>
    );
  }
}

export default App;
