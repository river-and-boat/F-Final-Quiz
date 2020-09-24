// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import '../../style/group-list.scss'

export default class GroupList extends Component{
  // eslint-disable-next-line react/state-in-constructor
  state = {
    // eslint-disable-next-line react/no-unused-state
    groupList: {}
  }

  groupStudent = () => {
    fetch('http://localhost:8080/groups')
      // eslint-disable-next-line consistent-return
      .then(data => {
        if (data.status === 200) {
          return data.json();
        }
      }).then(dataJson => {
        console.log(dataJson);
        this.setState({
          // eslint-disable-next-line react/no-unused-state
          groupList: dataJson
        });
    }).catch(error => {
      console.log(error)
    });
  }

  render() {
    const groups = this.state.groupList;
    let keyArray = [];
    // eslint-disable-next-line guard-for-in,no-unused-vars,no-restricted-syntax
    for (const key in groups) {
      // eslint-disable-next-line no-const-assign,no-unused-vars
      keyArray.push(key);
    }

    const body = keyArray.map((item, index) => {
      return <div>
        <div className="group-title" key={index}>{item}</div>
        <div className="group-member">{groups[item].map((item2, index2) => {
          return (
            <span key={index2}>{`${item2.id}.${item2.name}`}</span>
          )})
        }</div>
      </div>
    })

    return <div>
      <header>
        <h1>分组学员</h1>
        <input type="button" value="分组学员" onClick={this.groupStudent}/>
      </header>
      <main>
        {body}
      </main>
    </div>
  }
}