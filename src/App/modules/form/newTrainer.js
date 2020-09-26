import React, { Component } from 'react';
import './trainee-form.scss';
import { validEmail, validNotNull } from './formValid';

// TODO feedback：文件命名和组件名保持一致，不然很难维护
export default class FormTrainer extends Component {
  state = {
    name: '',
  };

  inputOnChange = (event) => {
    const { value } = event.target;
    this.setState({
      name: value,
    });
  };

  fetchPostTrainee = (trainer) => {
    fetch("http://localhost:8080/trainers", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trainer)
    }).then(data => {
      if (data.status === 201) {
        fetch('http://localhost:8080/trainers?grouped=false')
          // eslint-disable-next-line consistent-return
          .then(trainerList => {
            if (trainerList.status === 200) {
              return trainerList.json();
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
    if (
      validNotNull(this.state.name)
    ) {
      const trainer = {
        name: this.state.name
      };
      this.fetchPostTrainee(trainer);
    }
  };

  render() {
    return (
      <form className="add-trainer">
        <h1>新增讲师</h1>
        <label htmlFor="username">姓名</label>
        <input id="username" value={this.state.name} onChange={this.inputOnChange} />
        <a
          style={
            validNotNull(this.state.name)
              ? { visibility: 'hidden' }
              : { visibility: 'true', color: 'red' }
          }
        >
          用户名不能为空
        </a>
        <div className="user-operate">
          <button className="submit" onClick={this.submitForm}>
            提交
          </button>
          <button className="cancel">取消</button>
        </div>
      </form>
    );
  }
}
