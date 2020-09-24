import React, {Component} from 'react';
import '../../style/student-list.scss'
import FormUser from './form/newUser';

export default class StudentList extends Component{

  state = {
    studentList: []
  }

  componentDidMount() {
    fetch('http://localhost:8080/trainees?grouped=false')
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

  setStudentList = (trainees) => {
    this.setState({
      studentList: trainees
    });
  }

  render() {
    const listBody = this.state.studentList.map((item, index) => {
      return (
        <span key={index}>{`${item.id}.${item.name}`}</span>
      )});
    return <div id="show-student-list">
        <header>
          <h1>学员列表</h1>
        </header>
        <main id="listBody">
          {listBody}
          {/* eslint-disable-next-line react/button-has-type */}
          <button onClick={this.setVisible}>+添加学员</button><br/>
        </main>
      <FormUser onChangeStatus = {this.setStudentList} />
    </div>
  }
}