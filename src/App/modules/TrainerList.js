import React, {Component} from 'react';
import '../../style/student-list.scss'
import FormTrainer from './form/newTrainer';

export default class TrainerList extends Component{
  state = {
    trainerList: [],
    visible: false
  }

  componentDidMount() {
    fetch('http://localhost:8080/trainers?grouped=false')
      // eslint-disable-next-line consistent-return
      .then(data => {
        if (data.status === 200) {
          return data.json();
        }
      }).then(dataJson => {
      this.setState({
        // eslint-disable-next-line react/no-unused-state
        trainerList: dataJson
      });
    }).catch(error => {
      console.log(error)
    });
  }

  setTrainerList = (trainers) => {
    this.setState({
      trainerList: trainers
    });
  }

  setVisible = () => {
    const {visible} = this.state;
    // TODO feedback：setState是异步操作，如果里面需要获取前一个state的值需要，在setState里面传callback
    this.setState({
      visible: !visible
    });
  }

  render() {
    // TODO feedback：可以直接在组件内map，无需再定义一个listBody
    const listBody = this.state.trainerList.map((item, index) => {
      return (
        <span key={index}>{`${item.id}.${item.name}`}</span>
      )});

    // TODO feedback：可以使用section标签 list可以使用ul li
    return <div id="show-student-list">
      <header>
        <h1>讲师列表</h1>
      </header>

      {/* TODO feedback：main标签未正确使用 */}
      <main id="listBody">
        {listBody}
        {/* TODO feedback：可以调整css display方式来实现换行 */}
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={this.setVisible}>+添加讲师</button><br/>
      </main>
      <FormTrainer visible = {this.state.visible} onChangeStatus = {this.setTrainerList} />
    </div>
  }
}
