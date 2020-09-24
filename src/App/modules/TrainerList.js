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
    this.setState({
      visible: !visible
    });
  }

  render() {
    const listBody = this.state.trainerList.map((item, index) => {
      return (
        <span key={index}>{`${item.id}.${item.name}`}</span>
      )});
    return <div id="show-student-list">
      <header>
        <h1>讲师列表</h1>
      </header>
      <main id="listBody">
        {listBody}
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={this.setVisible}>+添加讲师</button><br/>
      </main>
      <FormTrainer visible = {this.state.visible} onChangeStatus = {this.setTrainerList} />
    </div>
  }
}