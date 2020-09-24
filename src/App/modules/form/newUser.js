import React, { Component } from 'react';
import './trainee-form.scss';

export default class FormUser extends Component {
  state = {
    name: '',
  };

  render() {
    return (
      <form className="add-trainee">
        <h1>新增学员</h1>
        <label htmlFor="username">姓名</label>
        <input id="username" />
        <label htmlFor="email">邮箱</label>
        <input id="email" />
        <label htmlFor="office">办公室</label>
        <input id="office" />
        <label htmlFor="zoom-id">Zoom ID</label>
        <input id="zoom-id" />
        <label htmlFor="github">Github账号</label>
        <input id="github" />
        <div className="user-operate">
          <button className="submit">提交</button>
          <button className="cancel">取消</button>
        </div>
      </form>
    );
  }
}
