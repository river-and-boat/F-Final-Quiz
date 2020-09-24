import React, { Component } from 'react';
import './App.scss';
import StudentList from './modules/StudentList';
import GroupList from './modules/GroupList';
import FormUser from './modules/form/newUser';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList />
        <StudentList />
        <FormUser />
      </div>
    );
  }
}

export default App;
