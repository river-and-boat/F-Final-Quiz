import React, { Component } from 'react';
import './trainee-form.scss';
import { validNotNull, validEmail} from './formValid';

export default class FormUser extends Component {

  state = {
    name: '',
    email: '',
    office: '',
    zoom: '',
    github: ''
  };

  inputOnChange = (event) => {
    const {value} = event.target;

    // TODO feedback：不建议使用switch
    switch (event.target.id) {
      case "username":
        this.setState({
          name: value
        });
        break;
      case "email":
        this.setState({
          email: value
        });
        break;
      case "office":
        this.setState({
          office: value
        });
        break;
      case "zoom-id":
        this.setState({
          zoom: value
        });
        break;
      case "github":
        this.setState({
          github: value
        });
        break;
      default:
        break;
    }
  }

  fetchPostTrainee = (trainee) => {
      fetch("http://localhost:8080/trainees", {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(trainee)
      }).then(data => {
        if (data.status === 201) {
          fetch('http://localhost:8080/trainees?grouped=false')
            // eslint-disable-next-line consistent-return
            .then(traineeList => {
              if (traineeList.status === 200) {
                return traineeList.json();
              }
            }).then(dataJson => {
            this.props.onChangeStatus(dataJson);
          }).catch(error => {
            console.log(error)
          });
        }
      });
  }

  submitForm = (e) => {
    e.preventDefault();
    // TODO feedback：建议用解构state赋值，代码更可读
    if (validNotNull(this.state.name) && validNotNull(this.state.email)
      && validNotNull(this.state.office) && validNotNull(this.state.zoom)
      && validNotNull(this.state.github) && validEmail(this.state.email)) {
      const trainee = {
        name: this.state.name,
        email: this.state.email,
        office: this.state.office,
        zoomId: this.state.zoom,
        github: this.state.github
      };
      this.fetchPostTrainee(trainee);
    }
  }

  render() {
    return (
      // TODO feedback：需要格式化，可读性太低
      // TODO feedback：建议用解构state赋值，代码更可读
      <form className="add-trainee">
        <h1>新增学员</h1>
        <label htmlFor="username">姓名</label>
        <input id="username" value={this.state.name} onChange={this.inputOnChange}/>
        <a style={ validNotNull(this.state.name) ? {visibility: 'hidden'} : {visibility: 'true', color: 'red'}}>用户名不能为空</a>
        <label htmlFor="email">邮箱</label>
        <input id="email" value={this.state.email} onChange={this.inputOnChange}/>
        <a style={ validNotNull(this.state.email) ? {visibility: 'hidden'} : {visibility: 'true', color: 'red'}}>邮箱不能为空</a>
        <a style={ validEmail(this.state.email) ? {visibility: 'hidden'} : {visibility: 'true', color: 'red'}}>邮箱格式不正确</a>
        <label htmlFor="office">办公室</label>
        <input id="office" value={this.state.office} onChange={this.inputOnChange}/>
        <a style={ validNotNull(this.state.office) ? {visibility: 'hidden'} : {visibility: 'true', color: 'red'}}>办公室不能为空</a>
        <label htmlFor="zoom-id">Zoom ID</label>
        <input id="zoom-id" value={this.state.zoom} onChange={this.inputOnChange}/>
        <a style={ validNotNull(this.state.zoom) ? {visibility: 'hidden'} : {visibility: 'true', color: 'red'}}>ZoomID不能为空</a>
        <label htmlFor="github">Github账号</label>
        <input id="github" value={this.state.github} onChange={this.inputOnChange}/>
        <a style={ validNotNull(this.state.github) ? {visibility: 'hidden'} : {visibility: 'true', color: 'red'}}>Github不能为空</a>
        <div className="user-operate">
          <button className="submit" onClick={this.submitForm}>提交</button>
          <button className="cancel">取消</button>
        </div>
      </form>
    );
  }
}
