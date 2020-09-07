import React, {Component} from 'react';
import '../../style/student-list.scss'

export default class StudentList extends Component{

  // eslint-disable-next-line react/state-in-constructor
  state = {
    // eslint-disable-next-line react/no-unused-state
    studentList: []
  }

   componentDidMount() {
    fetch('http://localhost:8080/gtb/students')
      // eslint-disable-next-line consistent-return
      .then(data => {
        if (data.status === 200) {
          return data.json();
        }
      }).then(dataJson => {
        this.setState({
          // eslint-disable-next-line react/no-unused-state
          studentList: dataJson
        });
      }).catch(error => {
        console.log(error)
    });
  }

  render() {
    const listBody = this.state.studentList.map((item, index) => {
      return (
        <span key={index}>{`${item.id}.${item.studentName}`}</span>
      )});
    return <div id="show-student-list">
      <header>
        <h1>学员列表</h1>
      </header>
      <main>
        {listBody}
        <span id="add-student">+添加学员</span>
      </main>
    </div>
  }
}