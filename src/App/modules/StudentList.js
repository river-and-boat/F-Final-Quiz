import React, {Component} from 'react';
import '../../style/student-list.scss'

export default class StudentList extends Component{

  // eslint-disable-next-line react/state-in-constructor
  state = {
    // eslint-disable-next-line react/no-unused-state
    studentList: [],
    type: 'hidden',
    name: ''
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
      <main id="listBody">
        {listBody}
        <input id="newStudent" onChange={this.textChange} value={this.state.name} type={this.state.type} onKeyPress={this.postNewStudent}/>
        <span id="add-student" onClick={this.addNewStudent}>+添加学员</span><br/>
      </main>
    </div>
  }

  textChange = e => {
    this.setState({
      name: e.target.value
    });
  }

  addNewStudent = () => {
    this.setState({
      type: 'text'
    });
  }

  postNewStudent = () => {
    console.log(this.state.name);
    fetch("/gtb/student", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: this.state.name
      // eslint-disable-next-line consistent-return
    }).then(data => {
      if (data.status === 201) {
        fetch('http://localhost:8080/gtb/students')
          // eslint-disable-next-line consistent-return
          .then(data2 => {
            if (data2.status === 200) {
              return data2.json();
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
    })
  }
}