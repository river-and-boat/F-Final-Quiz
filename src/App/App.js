import React, { Component } from 'react';
import './App.scss';
import StudentList from './modules/StudentList';
import GroupList from './modules/GroupList';

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
