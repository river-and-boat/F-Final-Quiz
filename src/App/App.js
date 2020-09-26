import React, { Component } from 'react';
import './App.scss';
import StudentList from './modules/StudentList';
import GroupList from './modules/GroupList';
import TrainerList from './modules/TrainerList';

class App extends Component {
  render() {
    // TODO feedback：可以在App组件内使用Switch Route，再定义一个Home组件包裹各个list
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
