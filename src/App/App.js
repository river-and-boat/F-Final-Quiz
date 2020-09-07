import React, { Component } from 'react';
import './App.scss';
import GroupList from './modules/GroupList';
import StudentList from './modules/StudentList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <h1>分组列表</h1>
        <GroupList />
        <h1>学员列表</h1>
        <StudentList />
      </div>
    );
  }
}

export default App;
